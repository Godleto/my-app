// import styles from './CountButton.module.css';

// export function CountButton(props) {
// 	const onClick = () => {
// 		switch (props.expression) {
// 			case '+':
// 				const lastPlus = props.data[props.data.length - 1];
// 				if (lastPlus !== props.expression) {
// 					props.onClick(props.data + props.expression);
// 				}
// 				break;
// 			case '-':
// 				const lastMines = props.data[props.data.length - 1];
// 				if (lastMines !== props.expression) {
// 					props.onClick(props.data + props.expression);
// 				}
// 				break;
// 			case '=':
// 				props.onClick(() => {});
// 				break;
// 			case 'c':
// 				props.onClick(() => {});
// 				break;
// 			default:
// 				return;
// 		}
// 	};
// 	return (
// 		<button className={styles.buttons} onClick={onClick}>
// 			{props.expression}
// 		</button>
// 	);
// }
