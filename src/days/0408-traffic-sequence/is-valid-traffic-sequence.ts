type TrafficLightColour = "green" | "yellow" | "red";

function* trafficSequenceGenerator(
  start: TrafficLightColour,
): Generator<TrafficLightColour, TrafficLightColour> {
  const validSequence: Array<TrafficLightColour> = ["red", "green", "yellow"];
  let index = validSequence.findIndex((light) => light === start);
  while (true) {
    yield validSequence[index++ % 3];
  }
}

export function isValidTrafficSequence(
  sequence: Array<TrafficLightColour>,
): boolean {
  const validSequence = trafficSequenceGenerator(sequence[0]);
  const inner = (sequence: Array<TrafficLightColour>): boolean => {
    if (sequence.length === 0) {
      return true;
    }
    return validSequence.next().value === sequence.shift() && inner(sequence);
  };
  return inner(sequence);
}
