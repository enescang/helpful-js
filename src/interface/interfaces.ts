interface IHelpfulJs {
  set(num: number): void;
  set(str: string): void;

  // min
  min(num: number): boolean;
  min(num: number, inclusive: boolean): boolean;

  // max
  max(num: number): boolean;
  max(num: number, inclusive: boolean): boolean;

  between(min: number, max: number): boolean;

  // removeChar
  removeChar(char: string, ignoreCase?: boolean): string;
  removeChar(chars: Array<string>, ignoreCase?: boolean): string;
}

interface IHelpfulJsInput {
  input: string;
}

export {
  IHelpfulJs,
  IHelpfulJsInput
};
