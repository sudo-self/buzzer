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
  "John Connor",
  "Captain Planet",
  "Maverick",
  "Rambo",
  "Batman",
  "Spock",
  "Indiana Jones",
  "Han Solo",
  "Luke Skywalker",
  "Wonder Woman",
  "Flash",
  "Thor",
  "Iron Man",
  "Rocky",
  "Blade",
  "Spider-Man",
  "Aquaman",
  "Scarlett Johansson",
  "Chuck Norris",
  "Hannibal",
  "Bane",
  "Terminator",
  "Buffy",
  "Ghost Rider",
  "Wolverine",
  "Black Widow",
  "Deadpool",
  "The Hulk",
  "Batman",
  "Superman",
  "Hawkeye",
  "Captain America",
];
