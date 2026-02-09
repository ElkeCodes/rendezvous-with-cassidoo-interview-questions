import { factorial } from "../shared/factorial";

export function countPerfectlyRoundCookies(input: number): number {
  function inner(n: bigint): number {
    if (n % 10n !== 0n) {
      return 0;
    }
    return 1 + inner(n / 10n);
  }
  return inner(factorial(BigInt(input)));
}
