import { Field } from './Components/Field/Field';
import styles from './App.module.css';
import { Information } from './Components/Information/Information';

export const AppLayout = ({
	status,
	currentPlayer,
	field,
	handleSquareClick,
	handleRestart,
}) => (
	<div className={styles.game}>
		<Information status={status} currentPlayer={currentPlayer} />
		<Field field={field} handleSquareClick={handleSquareClick} />
		<button className={styles.restart} onClick={handleRestart}>
			Начать заново
		</button>
	</div>
);
