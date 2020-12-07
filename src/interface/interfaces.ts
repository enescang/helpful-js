interface IHelpfulJs {
  set(num: number): void;
  set(str: string): void;

  // min
  min(num: number): boolean;
  min(num: number, inclusive: boolean): boolean;
}

interface IHelpfulJsInput {
  input: string;
}

export {
  IHelpfulJs,
  IHelpfulJsInput
};
