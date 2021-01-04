interface IHelpfulJs {
  set(num: number): IHelpfulJs;
  set(str: string): IHelpfulJs;
  set(arr: Array<string>): IHelpfulJs;
  set(obj: object): IHelpfulJs;

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

  // mustInclude
  mustInclude(arr: Array<string>): void;

  // canBe
  canBeAny(str: string | Array<any>): void;
}

interface IHelpfulJsInput {
  input: string;
}

export {
  IHelpfulJs,
  IHelpfulJsInput
};
