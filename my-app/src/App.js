import logo from './logo.svg';
import './App.css';
import { createElement } from 'react';

// императивный стиль
export const App = () => {
	// декларативный стиль
	const nowDate = createElement('div', {}, new Date().getFullYear());

	return (
		<div className="App">
			<header className="App-header">
				{/* декларативный стиль */}
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
					{nowDate}
				</a>
			</header>
		</div>
	);
};
