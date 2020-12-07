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
    min = helper.min(30, false);
    expect(min).toBe(false);
  });

  test('test the <max> function', () => {
    const helper = new HelperJs();
    let max = helper.set(22).max(30);
    expect(max).toBe(true);

    max = helper.set(19).max(12);
    expect(max).toBe(false);

    max = helper.set(71).max(113);
    expect(max).toBe(true);

    max = helper.set(11).max(11, false);
    expect(max).toBe(false);

    max = helper.set(23).max(23, true);
    expect(max).toBe(true);
  });
});
