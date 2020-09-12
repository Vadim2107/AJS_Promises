import json from './parser';
import read from './reader';
import GameSaving from './gamesaving';

// Задача - "Promises"

// export default class GameSavingLoader {
//   static load() {
//     return new Promise(
//       (resolve, reject) => read()
//         .then((data) => json(data))
//         .then((data) => resolve(new GameSaving(JSON.parse(data))))
//         .catch((err) => reject(err)),
//     );
//   }
// }

// Задача - "async/await"

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const jsonData = await json(data);
      return await new GameSaving(JSON.parse(jsonData));
    } catch (error) {
      return error;
    }
  }
}
