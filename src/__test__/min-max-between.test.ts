import HelpfulJs from '../helpful-js';

describe('Helpful Js Test', () => {
  test('test the <min> function', () => {
    const helper = new HelpfulJs();
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
    const helper = new HelpfulJs();
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

  test('test the <between> function', () => {
    const helper = new HelpfulJs();
    let between = helper.set(12).between(10, 19);
    expect(between).toBe(true);

    between = helper.set(7).between(0, 6);
    expect(between).toBe(false);

    between = helper.set(10).between(10, 10);
    expect(between).toBe(true);
  });
});
