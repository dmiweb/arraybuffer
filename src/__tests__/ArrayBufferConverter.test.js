import ArrayBufferConverter from '../js/ArrayBufferConverter';
import getBuffer from '../js/getBuffer';

test('testing methods class ArrayBufferConverter', () => {
  const testString = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

  ArrayBufferConverter.load(getBuffer());
  const result = ArrayBufferConverter.toString();

  expect(result).toBe(testString);
});