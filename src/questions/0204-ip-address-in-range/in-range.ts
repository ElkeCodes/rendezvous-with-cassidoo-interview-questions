const convertIpAddressToNumber = (ipAddress: string): number => {
  const parts = ipAddress.split(".");
  return parts.reduce(
    (acc, part, index) =>
      acc + parseInt(part, 10) * Math.pow(256, parts.length - index - 1),
    0,
  );
};

export function inRange(ipAddress: string, cidrNotation: string): boolean {
  const [startAddress, tempBits] = cidrNotation.split("/");
  const bits = parseInt(tempBits, 10);
  const mask = (-1 << (32 - bits)) >>> 0;
  return (
    (convertIpAddressToNumber(ipAddress) & mask) ==
    (convertIpAddressToNumber(startAddress) & mask)
  );
}
