import React from 'react';
import * as Styled from './ui-components/CalculatorUI';
import { CalculatorMain } from './components/DeliveryFeeCalculator';
import { ThemeProvider } from 'styled-components';
import { darkStyledTheme, lightStyledTheme } from './styles/theme';

function App() {
	const [pageColorTheme, setPageColorTheme] = React.useState('dark');

	const handleThemeToggle = () => {
		setPageColorTheme(pageColorTheme === 'dark' ? 'light' : 'dark');
	};

	return (
		<ThemeProvider
			theme={pageColorTheme === 'dark' ? darkStyledTheme : lightStyledTheme}
		>
			<Styled.Bg>
				<button onClick={() => handleThemeToggle()}>toggle</button>
				<CalculatorMain />
			</Styled.Bg>
		</ThemeProvider>
	);
}

export default App;
