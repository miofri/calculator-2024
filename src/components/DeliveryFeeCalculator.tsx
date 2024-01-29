import React, { useReducer } from 'react';
import { deliveryCalculationResult } from '../services/calculator-service';
import { FormStates } from '../interfaces/CalculatorModels';
import { formReducer } from '../reducers/formReducer';
import { checkMinIsOne } from './utils/checkMinIsOne';
import * as Styled from '../ui-components/CalculatorUI';
import { Forms } from './FormInputs';

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
	const [deliveryPrice, setDeliveryPrice] = React.useState(0);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (checkMinIsOne(formData)) {
			return;
		} else {
			setDeliveryPrice(deliveryCalculationResult(formData));
		}
	};

	return (
		<Styled.Container>
			<Styled.Title>{STRINGS.TITLE}</Styled.Title>
			<Styled.Form
				onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
			>
				<Styled.Fieldset>
					<legend className="visually-hidden">{STRINGS.LEGEND}</legend>
					<Forms formData={formData} setFormData={setFormData} />
					<Styled.Button data-testid="submit" type="submit">
						{STRINGS.BUTTON}
					</Styled.Button>
					<Styled.Paragraph>{STRINGS.PARAGRAPH}</Styled.Paragraph>
					<Styled.TotalFeeContainer_Paragraph>
						<Styled.TotalFeeContainer_Span data-testid="fee">
							{deliveryPrice}
						</Styled.TotalFeeContainer_Span>
						<Styled.TotalFeeContainer_Span>
							{STRINGS.CURRENCY}
						</Styled.TotalFeeContainer_Span>
					</Styled.TotalFeeContainer_Paragraph>
				</Styled.Fieldset>
			</Styled.Form>
		</Styled.Container>
	);
};
