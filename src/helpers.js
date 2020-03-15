export function formatPrice(cents) {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function getStoreName() {
  const adjectives = [
    "fancy",
    "bald",
    "dazzling",
    "glamorous",
    "elegant",
    "magnificent",
    "sparkling",
    "ambitious",
    "delightful",
    "jolly",
    "proud",
    "wonderful",
    "modern",
    "generous",
    "independent",
    "loyal",
    "modest",
    "sincere",
    "tough",
    "practical",
    "persistent",
    "neat",
    "impartial",
    "honest",
  ];

  const nouns = [
    "people",
    "ocean",
    "sea",
    "fish",
    "shrimps",
    "crabs",
    "clams",
    "oyster",
    "squid",
    "snails",
    "prawns",
    "lobsters",
    "tuna",
    "cod",
    "salmon",
    "shark",
    "trout",
  ];

  return `${rando(adjectives)}-${rando(adjectives)}-${rando(nouns)}`;
}
