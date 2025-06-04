import styles from './App.module.css';
import { useState } from 'react';

export const App = () => {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');
	const [currentDate, setCurrentDate] = useState(new Date());
	const [currentDay, setCurrentDay] = useState(new Date());

	let isValueVaild = error !== '' ? false : true;
	const getTimeFromDate = (date) => date.toISOString().substring(11, 19);
	function formatDate(date) {
		let dd = date.getDate();
		if (dd < 10) dd = '0' + dd;

		let mm = date.getMonth() + 1;
		if (mm < 10) mm = '0' + mm;

		let yy = date.getFullYear() % 100;
		if (yy < 10) yy = '0' + yy;

		return dd + '.' + mm + '.' + yy;
	}

	const onInputButtonClick = () => {
		const promptValue = prompt('Введите значение:');
		console.log(promptValue);

		if (promptValue.length < 3) {
			setError('Введенное значение должно содержать минимум 3 символа');
		} else {
			setValue(promptValue);
			setError('');
		}
	};

	const onAddButtonClick = () => {
		if (value) {
			setValue('');
			setError('');
			const currentTime = getTimeFromDate(currentDate);
			setCurrentDate(new Date());
			const dateNow = formatDate(currentDay);
			setCurrentDay(new Date());
			const updatedList = [
				...list,
				{ id: Date.now(), value, currentTime, dateNow },
			];
			setList(updatedList);
		}
	};

	return (
		<div className={styles.app}>
			<h1 className={styles['page-heading']}>Ввод значения</h1>
			<p className={styles['no-margin-text']}>
				Текущее значение <code>value</code>: "
				<output className={styles['current-value']}>{value}</output>"
			</p>
			{error !== '' && <div className={styles.error}>{error}</div>}
			<div className={styles['buttons-container']}>
				<button className={styles.button} onClick={onInputButtonClick}>
					Ввести новое
				</button>
				<button
					className={styles.button}
					disabled={!isValueVaild}
					onClick={onAddButtonClick}
				>
					Добавить в список
				</button>
			</div>
			<div className={styles['list-container']}>
				<h2 className={styles['list-heading']}>Список:</h2>
				{list.length < 1 && (
					<p className={styles['no-margin-text']}>Нет добавленных элементов</p>
				)}
				<ul className={styles.list}>
					{list.map(({ id, value, currentTime, dateNow }) => (
						<li className={styles['list-item']} key={id}>
							{value}
							{dateNow}
							{currentTime}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
