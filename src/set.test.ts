import { Set } from './set';

test('new set is empty', () => {
  const set = new Set<number>();
  expect(set.list()).toEqual([]);
});

test('items added to set on instantiation', () => {
  const set = new Set<string>('one', 'two');
  expect(set.list()).toEqual(['one', 'two']);
});

test('new items added to set', () => {
  const set = new Set<string>('one', 'two');
  set.add('three', 'four');
  expect(set.list()).toEqual(['one', 'two', 'three', 'four']);
});

test('list all items in set', () => {
  const set = new Set<string>('one', 'two');
  expect(set.list()).toEqual(['one', 'two']);
});

test('error adding duplicate item', () => {
  const set = new Set<string>('one');
  expect(() => set.add('one')).toThrowError();
});

test('item is removed from set', () => {
  const set = new Set<string>('one', 'two', 'three');
  set.remove('two');
  expect(set.list()).toEqual(['one', 'three']);
});

test('error removing nonexistent item', () => {
  const set = new Set<string>('one', 'two', 'three');
  expect(() => set.remove('four')).toThrowError();
});

test('set has item', () => {
  const set = new Set<string>('one', 'two', 'three');
  expect(set.has('three')).toBe(true);
  expect(set.has('four')).toBe(false);
});

test('set is cleared', () => {
  const set = new Set<string>('one', 'two', 'three');
  set.clear();
  expect(set.list()).toEqual([]);
});
