interface Coordinate {
  x: number;
  y: number;
}

export enum VIM_COMMAND_KEYS {
  LEFT = "h",
  DOWN = "j",
  UP = "k",
  RIGHT = "l",
}

export function getCharAfterVimCommands(
  input: string,
  commands: string,
): string {
  const lines = input.split("\n");
  const moveCursor = ({ x, y }: Coordinate, command: string): Coordinate => {
    switch (command) {
      case VIM_COMMAND_KEYS.LEFT:
        return { x: Math.max(0, x - 1), y };
      case VIM_COMMAND_KEYS.DOWN:
        return { x, y: Math.min(lines.length - 1, y + 1) };
      case VIM_COMMAND_KEYS.UP:
        return { x, y: Math.max(0, y - 1) };
      case VIM_COMMAND_KEYS.RIGHT:
        return { x: Math.min(lines[y].length - 1, x + 1), y };
      default:
        return { x, y };
    }
  };
  const executeCommands = (
    currentPosition: Coordinate,
    commands: Array<string>,
  ): string => {
    if (commands.length === 0) {
      return lines[currentPosition.y][currentPosition.x];
    }
    const [command, ...remainingCommands] = commands;
    return executeCommands(
      moveCursor(currentPosition, command),
      remainingCommands,
    );
  };
  return executeCommands({ x: 0, y: 0 }, commands.split(""));
}
