import { IHelpfulJsInput } from './interface/interfaces';

class HelpfulJs implements IHelpfulJsInput {
  input: any = '';

  set(num: number): void;
  set(str: string): void;

  set(param: string | number): void {
    this.input = param;
  }

  get(): IHelpfulJsInput {
    return this.input;
  }
}

export default HelpfulJs;
