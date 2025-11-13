export interface Card {
  name: string;
  type: string;
  image: string;
  power: number;
  rarity: "common" | "rare" | "epic" | "legendary";
}

export const cards: Card[] = [
  {
    name: "Code Purist",
    type: "Developer",
    image: "/cards/CodePurist.svg",
    power: 8,
    rarity: "epic",
  },
  {
    name: "Degen",
    type: "Trader",
    image: "/cards/Degen.svg",
    power: 6,
    rarity: "rare",
  },
  {
    name: "Hacker",
    type: "Security",
    image: "/cards/Hacker.svg",
    power: 9,
    rarity: "epic",
  },
  {
    name: "Head Hunter",
    type: "Recruiter",
    image: "/cards/HeadHunter.svg",
    power: 7,
    rarity: "rare",
  },
  {
    name: "Puffer",
    type: "Validator",
    image: "/cards/Puffer.svg",
    power: 10,
    rarity: "legendary",
  },
  {
    name: "Twitter Drama Queen",
    type: "Social",
    image: "/cards/TwitterDramaQueen.svg",
    power: 5,
    rarity: "common",
  },
  {
    name: "Vibe Coder",
    type: "Developer",
    image: "/cards/VibeCoder.svg",
    power: 7,
    rarity: "rare",
  },
  {
    name: "Yapper",
    type: "Social",
    image: "/cards/Yapper.svg",
    power: 4,
    rarity: "common",
  },
];

export function getRandomCard(): Card {
  return cards[Math.floor(Math.random() * cards.length)];
}
