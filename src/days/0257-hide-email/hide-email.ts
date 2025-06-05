const parseLocal = (local: string): string =>
  `${local[0]}${Array.from({ length: local.length - 2 }, () => "*").join("")}${local[local.length - 1]}`;

const parseDomain = (domain: string): string => {
  const [first, ...rest] = domain.split(".");

  return [
    `${first[0]}${Array.from({ length: first.length - 1 }, () => "*").join("")}`,
    ...rest,
  ].join(".");
};

export function hideEmail(email: string, hideFull = false): string {
  const [local, domain] = email.split("@");
  return `${parseLocal(local)}@${hideFull ? parseDomain(domain) : domain}`;
}
