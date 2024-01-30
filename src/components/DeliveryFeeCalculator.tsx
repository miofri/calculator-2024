import React, { useReducer } from 'react';
import { deliveryCalculationResult } from '../services/calculator-service';
import { FormStates } from '../interfaces/CalculatorModels';
import { formReducer } from '../reducers/formReducer';
import * as Styled from '../ui-components/CalculatorUI';
import { Forms } from './FormInputs';
import { ThemeProvider } from 'styled-components';
import { darkStyledTheme, lightStyledTheme } from '../styles/theme';

const STRINGS = {
	TITLE: 'Delivery calculator',
	LEGEND: 'Delivery information to be calculated',
	BUTTON: 'Calculate delivery price',
	PARAGRAPH: 'Delivery Fee: ',
	CURRENCY: '€',
};

const initialState: FormStates = {
	cartValue: 0,
	deliveryDistance: 0,
	amountOfItems: 0,
	orderTime: '',
};

export const CalculatorMain = () => {
	const [formData, setFormData] = useReducer(formReducer, initialState);
	const [deliveryPrice, setDeliveryPrice] = React.useState<number>(0);
	const [pageColorTheme, setPageColorTheme] = React.useState<'dark' | 'light'>(
		'dark'
	);

	const handleThemeToggle = () => {
		setPageColorTheme(pageColorTheme === 'dark' ? 'light' : 'dark');
	};
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setDeliveryPrice(deliveryCalculationResult(formData));
	};

	return (
		<ThemeProvider
			theme={pageColorTheme === 'dark' ? darkStyledTheme : lightStyledTheme}
		>
			<Styled.BodyContainer data-testid="body-container">
				<Styled.CalculatorContainer>
					<Styled.TitleContainer>
						<Styled.Title>{STRINGS.TITLE}</Styled.Title>{' '}
						<Styled.ThemeToggler
							data-testid="theme-toggler"
							className="material-symbols-outlined"
							onClick={() => handleThemeToggle()}
						>
							dark_mode
						</Styled.ThemeToggler>
					</Styled.TitleContainer>

					<Styled.Form
						data-testid="form"
						onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
					>
						<Styled.Fieldset>
							<legend className="visually-hidden">{STRINGS.LEGEND}</legend>
							<Forms formData={formData} setFormData={setFormData} />
							<Styled.Button data-testid="submit" type="submit">
								{STRINGS.BUTTON}
							</Styled.Button>

							<Styled.Paragraph>{STRINGS.PARAGRAPH}</Styled.Paragraph>
							<Styled.TotalFeeContainer>
								<Styled.TotalFeeContainer_Span data-testid="fee">
									{deliveryPrice}
								</Styled.TotalFeeContainer_Span>
								<Styled.TotalFeeContainer_Span>
									{STRINGS.CURRENCY}
								</Styled.TotalFeeContainer_Span>
							</Styled.TotalFeeContainer>
						</Styled.Fieldset>
					</Styled.Form>
				</Styled.CalculatorContainer>
				<Styled.Credits
					href="https://www.flaticon.com/free-icons/calculator"
					title="calculator icons"
				>
					Site logo {'('}calculator{')'} created by Rahul Kaklotar - Flaticon
				</Styled.Credits>
			</Styled.BodyContainer>
		</ThemeProvider>
	);
};
