import Settings from '../app';

test('Testing setting list with right key and value', () => {
  const user = new Settings(
    { theme: 'light' },
  );
  const expected = new Map([
    ['theme', 'light'],
    ['music', 'trance'],
    ['difficulty', 'easy'],
  ]);
  expect(user.settings).toEqual(expected);
});

test('Testing setting list with right keys and values', () => {
  const user = new Settings(
    { theme: 'light' },
    { music: 'rock' },
    { difficulty: 'hard' },
  );
  const expected = new Map([
    ['theme', 'light'],
    ['music', 'rock'],
    ['difficulty', 'hard'],
  ]);
  expect(user.settings).toEqual(expected);
});

test('Testing setting list with wrong key', () => {
  expect(() => new Settings({ them: 'light' })).toThrow('Wrong key of settings them');
});

test('Testing setting list with wrong value', () => {
  expect(() => new Settings({ theme: 'lightblue' })).toThrow('Wrong value of settings lightblue');
});
