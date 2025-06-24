import { PLAYER } from '../const/player.js';

export const checkEmptySquare = (field) =>
	field.some((squarePlayer) => squarePlayer === PLAYER.NOBODY);
