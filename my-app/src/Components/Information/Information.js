import { PLAYER_ACTION } from '../const/player-action';
import { PLAYER_NAME } from '../const/player-name';
import { STATUS } from '../const/status';
import { InformationLayout } from './Information-layout';

export const Information = ({ status, currentPlayer }) => {
	const playerAction = PLAYER_ACTION[status];
	const playerName = PLAYER_NAME[currentPlayer];

	const information =
		status === STATUS.DRAW ? 'Ничья' : `${playerAction}: ${playerName}`;

	return <InformationLayout information={information} />;
};
