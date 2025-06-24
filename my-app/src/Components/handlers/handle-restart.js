import { PLAYER } from '../const/player';
import { STATUS } from '../const/status';

export const handleRestart = ({ setStatus, setCurrentPlayer, setField }) => {
	setStatus(STATUS.TURN);
	setCurrentPlayer(PLAYER.CROSS);
	setField(() => new Array(9).fill(PLAYER.NOBODY));
};
