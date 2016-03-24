import test from 'ava';
import preventBadIdeas from './index';
import fs from 'fs';

preventBadIdeas();

test('throws when trying to read files form disk', t => {
  const badIdea = () => fs.readFile('/tmp');
  t.throws(badIdea, 'Y U NO UNIT TEST?!');
});
