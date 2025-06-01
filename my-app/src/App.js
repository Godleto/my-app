import styles from './App.module.css';
import { useState } from 'react';
import { Numbers } from './MyComponents/Numbers.jsx';
import { CountButton } from './MyComponents/CountButton.jsx';

export const App = () => {
	const [counts, setCounts] = useState('0');
	const [result, setResult] = useState('');

	return (
		<>
			<main className={styles.calc}>
				<div className={styles.field}>
					<div className={styles.counts}>{counts}</div>
					<div className={styles.result}>{result}</div>
				</div>
				<Numbers data={counts} onClick={setCounts} />
				<div className={styles.box}>
					<CountButton data={counts} onClick={setCounts} expression={'+'} />
					<CountButton data={counts} onClick={setCounts} expression={'-'} />
					<CountButton
						onClick={() => setResult(eval(counts))}
						expression={'='}
					/>
					<CountButton
						data={counts}
						onClick={() => {
							setCounts('0');
							setResult('');
						}}
						expression={'c'}
					/>
				</div>
			</main>
		</>
	);
};
