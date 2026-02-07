import { describe, expect, test } from "vitest";
import {
  captureTerritory,
  createBoard,
  placeStone,
  type GoBoard,
  type Stone,
} from "./go-board";

const makeBoard = (rows: Array<Array<Stone>>): GoBoard => ({
  size: rows.length,
  grid: rows.map((row) => [...row]),
});

describe("day #0004", () => {
  test("createBoard fills empty grid", () => {
    const board = createBoard(3);

    expect(board.size).toBe(3);
    expect(board.grid).toEqual([
      [".", ".", "."],
      [".", ".", "."],
      [".", ".", "."],
    ]);
  });

  test("placeStone places a stone", () => {
    const board = createBoard(3);
    const result = placeStone(board, [1, 1], "B");

    expect(result.board.grid[1][1]).toBe("B");
    expect(result.captured).toEqual([]);
  });

  test("placeStone captures a surrounded group", () => {
    const board = makeBoard([
      ["B", "B", "B"],
      ["B", "W", "."],
      ["B", "B", "B"],
    ]);

    const result = placeStone(board, [2, 1], "B");

    expect(result.captured).toEqual([[1, 1]]);
    expect(result.board.grid[1][1]).toBe(".");
    expect(result.board.grid[1][2]).toBe("B");
  });

  test("captureTerritory removes groups with no liberties", () => {
    const board = makeBoard([
      ["B", "B", "B"],
      ["B", "W", "B"],
      ["B", "B", "B"],
    ]);

    const result = captureTerritory(board, "W");

    expect(result.captured).toEqual([[1, 1]]);
    expect(result.board.grid[1][1]).toBe(".");
  });

  test("placeStone rejects out of bounds", () => {
    const board = createBoard(3);

    expect(() => placeStone(board, [3, 0], "B")).toThrow(
      "Coordinate is out of bounds.",
    );
  });

  test("placeStone rejects occupied point", () => {
    const board = makeBoard([
      ["B", ".", "."],
      [".", ".", "."],
      [".", ".", "."],
    ]);

    expect(() => placeStone(board, [0, 0], "W")).toThrow(
      "Cannot place a stone on an occupied point.",
    );
  });
});
