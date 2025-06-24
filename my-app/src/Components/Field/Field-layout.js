import styles from './Field-layout.module.css';
import { PLAYER_SYMBOL } from '../const/player-symbol';

export const FieldLayout = ({ field, handleSquareClick }) => (
	<div className={styles.field}>
		{field.map((squarePlayer, index) => (
			<button
				key={index}
				className={styles.square}
				onClick={() => handleSquareClick(index)}
			>
				{PLAYER_SYMBOL[squarePlayer]}
			</button>
		))}
	</div>
);
