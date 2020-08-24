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
      },
      {
        id: 4
      },
      {
        id: 5
      },
      {
        id: 6
      }
    ];

    const shuffledArray = shuffle(givenArray);

    expect(shuffledArray).not.toEqual(givenArray);
  })
});
