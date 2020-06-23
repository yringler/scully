import { readFileSync } from 'fs';
import { join } from 'path';
import { replaceIndexNG } from '../test-config.helper';
// import { title404 } from '../../../../libs/scully/src/lib/utils/serverstuff/title404';

// copied in here, because the import blows up in GA.
const title404 = '404 - URL not provided in the app Scully is serving';

describe('baseroute 404 handling working', () => {
  const index: string = readFileSync(
    join(__dirname, '../../../../dist/static/test/fake1/index.html'),
    'utf-8'
  ).toString();
  const cleanIndex = replaceIndexNG(index);

  it('should match the snapshot', () => {
    expect(cleanIndex).toMatchSnapshot();
  });

  it(`Should have the text "${title404}"`, () => {
    expect(cleanIndex.includes(title404)).toBe(true);
  });
});