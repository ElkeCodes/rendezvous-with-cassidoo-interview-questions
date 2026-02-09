type Cycle = "soak" | "wash" | "rinse" | "spin" | "dry" | "done";

function* createWashingCycle(): Generator<Cycle, Cycle> {
  yield "soak";
  yield "wash";
  yield "rinse";
  yield "spin";
  yield "dry";
  while (true) {
    yield "done";
  }
}

export function createLaundryItem(): { nextCycle: () => Cycle } {
  const washingCycle = createWashingCycle();
  return {
    nextCycle: () => washingCycle.next().value,
  };
}
