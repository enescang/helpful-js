import HelperJs from '../helpful-js';

describe('Helpful Js Test', () => {
  test('test the <min> function', () => {
    const helper = new HelperJs();
    helper.set(2);
    let min = helper.min(3);
    expect(min).toBe(false);

    helper.set(20);
    min = helper.min(10);
    expect(min).toBe(true);

    helper.set(30);
    min = helper.min(30);
    expect(min).toBe(true);
  });
});
