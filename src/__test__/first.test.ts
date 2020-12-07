import HelperJs from '../helpful-js';

describe('test the all config variables', () => {
  test('two plus two is four', () => {
    const helper = new HelperJs();
    helper.set(2);
    const t = helper.get();
    expect(t).toBe(2);
  });
});
