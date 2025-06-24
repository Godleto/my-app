import { STATUS } from '../const/status';
import { PLAYER } from '../const/player';
import { checkWin } from '../utils/check-win';
import { checkEmptySquare } from '../utils/check-empty-square';

export const handleSquareClick = (
	{ status, field, currentPlayer, setField, setStatus, setCurrentPlayer },
	squareIndex,
) => {
	if (
		status === STATUS.WIN ||
		status === STATUS.DRAW ||
		field[squareIndex] !== PLAYER.NOBODY
	) {
		return;
	}
	const newField = [...field];

	newField[squareIndex] = currentPlayer;

	setField(newField);

	if (checkWin(newField, currentPlayer)) {
		setStatus(STATUS.WIN);
	} else if (checkEmptySquare(newField)) {
		setCurrentPlayer(currentPlayer === PLAYER.CROSS ? PLAYER.ZERO : PLAYER.CROSS);
	} else {
		setStatus(STATUS.DRAW);
	}
};
