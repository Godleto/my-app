// import styles from './Numbers.module.css';

// export function Numbers(props) {
// 	const nums = Array.from(Array(10).keys()).map((number) => {
// 		return (
// 			<button
// 				onClick={(e) => {
// 					if (props.data !== '0') {
// 						props.onClick(props.data + e.target.innerText);
// 					} else {
// 						props.onClick(e.target.innerText);
// 					}
// 				}}
// 				className={styles.number}
// 				key={number}
// 			>
// 				{number}
// 			</button>
// 		);
// 	});
// 	return (
// 		<>
// 			<div className={styles.box}>{nums}</div>
// 		</>
// 	);
// }
