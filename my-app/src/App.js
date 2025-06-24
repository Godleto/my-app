import { useState } from 'react';
import { AppLayout } from './App-layout.js';
import { handleRestart } from './Components/handlers/handle-restart.js';
import { handleSquareClick } from './Components/handlers/handle-square-click.js';
import { STATUS } from './Components/const/status.js';
import { PLAYER } from './Components/const/player.js';

export const App = () => {
	const [currentPlayer, setCurrentPlayer] = useState(PLAYER.CROSS);
	const [status, setStatus] = useState(STATUS.TURN);
	const [field, setField] = useState(() => new Array(9).fill(PLAYER.NOBODY));

	const state = { status, setStatus, currentPlayer, setCurrentPlayer, field, setField };

	return (
		<AppLayout
			status={status}
			currentPlayer={currentPlayer}
			field={field}
			handleSquareClick={(squareIndex) => handleSquareClick(state, squareIndex)}
			handleRestart={() => handleRestart(state)}
		/>
	);
};
