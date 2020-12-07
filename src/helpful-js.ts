import { IHelpfulJs } from './interface/interfaces';

class HelpfulJs implements IHelpfulJs {
  input: any = '';

  set(num: number): void;
  set(str: string): void;

  set(param: string | number): void {
    this.input = param;
  }

  // Min
  min(num: number): boolean;
  min(num: number, inclusive: boolean): boolean;

  min(min: number, inclusive?: boolean): boolean {
    const { input } = this;
    const isInclusive = typeof inclusive !== 'undefined' && inclusive === false;
    // isInclusive:true => greater than
    // isInclusive:false => greater than or equal
    return isInclusive === true ? input > min : input >= min;
  }
}

export default HelpfulJs;
