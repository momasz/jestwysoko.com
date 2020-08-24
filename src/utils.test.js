import { shuffle } from './utils';

describe('shuffle method', () => {
  it('should randomise given array order', () => {
    const givenArray = [
      {
        id: 1
      },
      {
        id: 2
      },
      {
        id: 3
      }
    ];

    const shuffledArray = shuffle(givenArray);

    expect(shuffledArray).not.toEqual(givenArray);
  })
});
