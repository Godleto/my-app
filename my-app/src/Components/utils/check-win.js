import { WIN_CONDITION } from '../const/win-condition.js';

export const checkWin = (field, currentPlayer) =>
	WIN_CONDITION.some((winCondtition) =>
		winCondtition.every((squareIndex) => field[squareIndex] === currentPlayer),
	);
