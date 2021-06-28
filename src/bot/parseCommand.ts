import { Literal, Union, Static, check } from "runtypes";
import { Option } from "../util";

const BotCommandType = Union(
  Literal("echo"),
  Literal("invalid"),
  Literal("meme"),
  Literal("mock"),
  Literal("qrd"),
  Literal("laugh"),
  Literal("google"),
  Literal("bing"),
  Literal("sermon"),
  Literal("encourage"),
  Literal("emoji")
);
type BotType = Static<typeof BotCommandType>;

export type BotCommand = {
  type: BotType;
  content: string[];
  isValid: boolean;
  invalidCommand: Option<string>;
};

const validateType = (type: string): BotType => {
  try {
    return BotCommandType.check(type);
  } catch {
    return "invalid";
  }
};

export const parseCommand = (input: string): BotCommand => {
  const isValid = input.toLowerCase().startsWith("butler:");
  const [type, ...content] = input
    .replace(/^butler:/i, "")
    .trim()
    .split(".")
    .map((x) => x.trim());
  const checkedType = validateType(type);

  return {
    type: checkedType,
    content: content,
    isValid,
    invalidCommand: checkedType === "invalid" ? type : undefined,
  };
};
