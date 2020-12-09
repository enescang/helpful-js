import { IHelpfulJs } from './interface/interfaces';

class HelpfulJs implements IHelpfulJs {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  input: any = '';

  // #region SET
  set(num: number): HelpfulJs;
  set(str: string): HelpfulJs;

  set(param: string | number): HelpfulJs {
    this.input = param;
    return this;
  }
  // #endregion

  // #region MIN
  min(num: number): boolean;
  min(num: number, inclusive: boolean): boolean;

  min(min: number, inclusive?: boolean): boolean {
    const { input } = this;
    const isInclusive = typeof inclusive !== 'undefined' && inclusive === false;
    // isInclusive:true => greater than
    // isInclusive:false => greater than or equal
    return isInclusive === true ? input > min : input >= min;
  }
  // #endregion

  // #region MAX
  max(num: number): boolean;
  max(num: number, inclusive?: boolean): boolean;

  max(max: number, inclusive?: boolean): boolean {
    const { input } = this;
    const isInclusive = typeof inclusive !== 'undefined' && inclusive === false;
    // isInclusive:true => less than
    // isInclusive:false => less than or equal
    return isInclusive === true ? input < max : input <= max;
  }
  // #endregion MAX

  between(min: number, max: number): boolean {
    const { input } = this;
    return input >= min && input <= max;
  }
}

export default HelpfulJs;
