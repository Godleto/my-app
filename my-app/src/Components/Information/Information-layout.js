import styles from './Information-layout.module.css';

export const InformationLayout = ({ information }) => {
	return <div className={styles.information}>{information}</div>;
};
