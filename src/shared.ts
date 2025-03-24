export type ChatMessage = {
  id: string;
  content: string;
  user: string;
  role: "user" | "assistant";
};

export type Message =
  | {
      type: "add";
      id: string;
      content: string;
      user: string;
      role: "user" | "assistant";
    }
  | {
      type: "update";
      id: string;
      content: string;
      user: string;
      role: "user" | "assistant";
    }
  | {
      type: "all";
      messages: ChatMessage[];
    };

export const names = [
  "Neo",
  "Maverick",
  "Echo",
  "Dash",
  "Rogue",
  "Blaze",
  "Zara",
  "Ace",
  "Caden",
  "Jax",
  "Vega",
  "Luna",
  "Phoenix",
  "Raven",
  "Zane",
  "Axel",
  "Sable",
  "Koda",
  "Viper",
  "Drake",
  "Nova",
  "Wolf",
  "Hunter",
  "Ryder",
  "Jett",
  "Storm",
  "Kai",
];

