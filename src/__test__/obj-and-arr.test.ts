import HelpfulJs from '../helpful-js';

describe('test the object & array methods', () => {
  test('test the <mustInclude> function', () => {
    const helper = new HelpfulJs();
    const obj = {
      name: 'foo',
      other: 'bar'
    };
    expect(() => helper.set(obj).mustInclude(['name', 'surname'])).toThrowError();
    expect(() => helper.set(obj).mustInclude(['name', 'other'])).not.toThrowError();
  });
});
