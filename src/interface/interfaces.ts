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
}

interface IHelpfulJsInput {
  input: string;
}

export {
  IHelpfulJs,
  IHelpfulJsInput
};
