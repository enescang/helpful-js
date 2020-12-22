import { IHelpfulJs } from './interface/interfaces';
import * as Utils from './utils/Utils';

class HelpfulJs implements IHelpfulJs {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  input: any = '';

  // #region SET
  set(num: number): HelpfulJs;
  set(str: string): HelpfulJs;
  set(arr: Array<string>): HelpfulJs;

  set(param: string | number | Array<string> | object): HelpfulJs {
    this.input = param;
    return this;
  }
  // #endregion

  // #region MIN
  min(num: number): boolean;
  min(num: number, inclusive: boolean): boolean;

  min(min: number, inclusive?: boolean): boolean {
    const { input } = this;
    const isExclusive = typeof inclusive !== 'undefined' && inclusive === false;
    // isExclusive:true => greater than
    // isExclusive:false => greater than or equal
    return isExclusive === true ? input > min : input >= min;
  }
  // #endregion

  // #region MAX
  max(num: number): boolean;
  max(num: number, inclusive?: boolean): boolean;

  max(max: number, inclusive?: boolean): boolean {
    const { input } = this;
    const isExclusive = typeof inclusive !== 'undefined' && inclusive === false;
    // isExclusive:true => less than
    // isExclusive:false => less than or equal
    return isExclusive === true ? input < max : input <= max;
  }
  // #endregion MAX

  between(min: number, max: number): boolean {
    const { input } = this;
    return input >= min && input <= max;
  }

  // #region
  removeChar(char: string, ignoreCase?: boolean): string;
  removeChar(chars: Array<string>, ignoreCase?: boolean): string;
  removeChar(chars: string | Array<string>, ignoreCase?: boolean): string {
    let { input } = this;
    input = Utils.TurkisToEnglish(input);
    const ignore = ignoreCase === false ? '' : 'i';
    const pattern = `g${ignore}`;
    let remove: any;
    if (typeof chars === 'string') {
      const charsLength = chars.length;
      if (charsLength === 1) {
        remove = chars;
      } else {
        remove = chars.split(',').join('');
      }
    }
    if (typeof chars === 'object') {
      remove = chars.join('');
    }
    const regex = new RegExp(remove, pattern);
    return input.replace(regex, '');
  }
  // #endregion
}

export default HelpfulJs;
