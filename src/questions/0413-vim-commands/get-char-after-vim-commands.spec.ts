import { describe, expect, test } from "vitest";
import {
  getCharAfterVimCommands,
  VIM_COMMAND_KEYS,
} from "./get-char-after-vim-commands";

describe("day #0413", () => {
  test("example multiline string", () => {
    const string = `Hello, world!
how are ya?`;
    const commands = "jlhll";

    expect(getCharAfterVimCommands(string, commands)).toBe("w");
  });

  test("oneline string with newlines", () => {
    const string = "Hello, world!\nhow are ya?";
    const commands = "jlhll";

    expect(getCharAfterVimCommands(string, commands)).toBe("w");
  });

  test("going up returns same character if we would go out of bounds", () => {
    expect(getCharAfterVimCommands("x", VIM_COMMAND_KEYS.UP)).toEqual("x");
  });

  test("going left returns same character if we would go out of bounds", () => {
    expect(getCharAfterVimCommands("x", VIM_COMMAND_KEYS.LEFT)).toEqual("x");
  });

  test("going right returns same character if we would go out of bounds", () => {
    expect(getCharAfterVimCommands("x", VIM_COMMAND_KEYS.RIGHT)).toEqual("x");
  });

  test("going down returns same character if we would go out of bounds", () => {
    expect(getCharAfterVimCommands("x", VIM_COMMAND_KEYS.DOWN)).toEqual("x");
  });

  test("nothing happens when using an unknown command", () => {
    expect(getCharAfterVimCommands("x", "2")).toEqual("x");
  });
});
