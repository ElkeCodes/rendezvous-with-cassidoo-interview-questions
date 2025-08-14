import { describe, expect, test } from "vitest";
import { groupAudioFiles } from "./group-audio-files";

describe("day #0417", () => {
  test("examples", () => {
    const files = [120, 90, 60, 150, 80];
    const maxDuration = 200;
    expect(groupAudioFiles(files, maxDuration)).toStrictEqual([
      [150],
      [120, 80],
      [90, 60],
    ]);
    expect(groupAudioFiles(files, 160)).toStrictEqual([
      [150],
      [120],
      [90, 60],
      [80],
    ]);
  });

  test("debug", () => {
    expect(groupAudioFiles([], 100)).toStrictEqual([]);
    expect(groupAudioFiles([200], 160)).toStrictEqual([[200]]);
  });
});
