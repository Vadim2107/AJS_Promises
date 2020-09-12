/* eslint-disable import/named */
import GameSavingLoader from '../GameSavingLoader';
import { saveData } from '../reader';
// import read from '../reader';
import GameSaving from '../gamesaving';

const hitman = new GameSaving(JSON.parse(saveData));
const testData = '{"id": 9,"created": 1546300800, "userInfo": {"id": 1, "name": "Ninja", "level": 10, "points":2000}}';
const ninja = new GameSaving(JSON.parse(testData));

// Задача - "Promises"

// test('Test 1', (done) => {
//   GameSavingLoader.load().then((result) => {
//     expect(result).toEqual(hitman);
//   }).catch((err) => err);
//   done();
// });

test('Test 1', async () => {
  const save = await GameSavingLoader.load();
  expect(save).toEqual(hitman);
});

test('Test 2', async () => {
  const save = await GameSavingLoader.load();
  expect(save).not.toEqual(ninja);
});
