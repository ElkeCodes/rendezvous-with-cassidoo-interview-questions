export function konamiMapping(input: string): Record<string, string> {
  const konamiCode = "UUDDLRLRBA";
  
  const findMapping = (s: string) => {
    const mapping: Record<string, string> = {};
    for (let i = 0; i < s.length; i++) {
      const currentChar = s[i];
      if (!mapping[currentChar]) {
        mapping[currentChar] = konamiCode[i];
      } else if (mapping[currentChar] !== konamiCode[i]) {
        return null;
      }
    }
    return mapping;
  };

  for (let i = 0; i <= input.length - konamiCode.length; i++) {
    const substring = input.slice(i, i + konamiCode.length);
    const mapping = findMapping(substring);
    if (mapping) {
      return mapping;
    }
  }

  return {};
}