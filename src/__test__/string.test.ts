import HelpfulJs from '../helpful-js';

describe('test the string methods', () => {
  test('test the <removeChar> function', () => {
    const helper = new HelpfulJs();
    let ignoreCase = true;
    let str = helper.set('database').removeChar('a');
    expect(str).toBe('dtbse');

    str = helper.set('İstanbul').removeChar('i,s');
    expect(str).toBe('tanbul');

    str = helper.set('America').removeChar(['r', 'i']);
    expect(str).toBe('Ameca');

    ignoreCase = false;
    str = helper.set('HeLLO WorlD').removeChar('l', ignoreCase);
    expect(str).toBe('HeLLO WorD');

    ignoreCase = true;
    str = helper.set('HeLLO WorlD').removeChar('l', ignoreCase);
    expect(str).toBe('HeO WorD');
  });
});
