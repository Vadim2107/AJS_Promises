/* eslint-disable no-console */
import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load().then((saving) => saving, (error) => console.log(error));
