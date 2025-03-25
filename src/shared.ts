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
  "Viper",
  "Neo",
  "J. Connor",
  "C. Planet",
  "Maverick",
  "Rambo",
  "Batman",
  "Spock",
  "I. Jones",
  "H. Solo",
  "L. Skywalker",
  "W. Woman",
  "Flash",
  "Thor",
  "Iron Man",
  "Rocky",
  "Blade",
  "SpiderMan",
  "Aquaman",
  "S. Johansson",
  "C. Norris",
  "Hannibal",
  "Bane",
  "Terminator",
  "Buffy",
  "G. Rider",
  "Wolverine",
  "B. Widow",
  "Deadpool",
  "The Hulk",
  "Batman",
  "Superman",
  "Hawkeye",
  "C. America",
];
