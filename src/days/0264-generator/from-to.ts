export function fromTo(from: number, to: number): () => number | undefined {
  let i = from;
  return () => (i <= to ? i++ : undefined);
}
