import { describe, expect, test } from "vitest";
import { parsePalindromes } from "./palindromes-in-files";
import weirdAlYankovicLyrics from "./first_page.txt?raw";
import noPalindromesFile from "./second_page.txt?raw";
import onePalindromeFile from "./third_page.txt?raw";

describe("day #0232", () => {
  describe("Weird Al Yankovic - Bob, a song consisting of only palindromes", () => {
    test("amount of palindromes in a file", () => {
      expect(parsePalindromes(weirdAlYankovicLyrics).amount).toBe(38);
    });
    test("linenumbers of the palindromes in a file", () => {
      expect(parsePalindromes(weirdAlYankovicLyrics).lineNumbers).toStrictEqual(
        [
          2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 14, 15, 16, 17, 18, 19, 20, 21, 22,
          27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 39, 40, 41, 42, 43, 44, 45,
          46, 47,
        ],
      );
    });
  });

  describe("a file without any palindromes", () => {
    test("amount of palindromes in a file", () => {
      expect(parsePalindromes(noPalindromesFile).amount).toBe(0);
    });
    test("linenumbers of the palindromes in a file", () => {
      expect(parsePalindromes(noPalindromesFile).lineNumbers).toStrictEqual([]);
    });
  });

  describe("a file with 1 palindromes", () => {
    test("amount of palindromes in a file", () => {
      expect(parsePalindromes(onePalindromeFile).amount).toBe(1);
    });
    test("linenumbers of the palindromes in a file", () => {
      expect(parsePalindromes(onePalindromeFile).lineNumbers).toStrictEqual([6]);
    });
  });
});
