import React from 'react';

import { FormTemplateModel } from '../interfaces/formTemplateModel';
import { FormStates } from '../interfaces/formDataModel';
import * as Styled from '../ui-components/CalculatorUI';

export const FormInputTemplate = ({
	formType,
	formTitle,
	formLabel,
	formUnitLabel,
	formValue,
	formPlaceholder,
	onChange,
}: FormTemplateModel) => {
	// Defines the expected step for each input types.
	const stepValues: { [key: string]: number } = {
		cartValue: 0.01,
		deliveryDistance: 1,
		numberOfItems: 1,
	};

	const inputFieldTitle: { [key: string]: string } = {
		cartValue: "Please enter the cart's value",
		deliveryDistance: 'Please enter the delivery distance',
		numberOfItems: 'Please enter the number of items',
		orderTime: 'Please enter the order time',
	};

	return (
		<>
			<Styled.Label htmlFor={formTitle}>
				{formLabel} {formUnitLabel !== '' ? `(${formUnitLabel})` : null}
			</Styled.Label>
			<Styled.Input
				data-test-id={formTitle}
				id={formTitle}
				min={stepValues[formTitle] || undefined}
				name={formTitle}
				placeholder={formPlaceholder}
				step={stepValues[formTitle] || undefined}
				title={inputFieldTitle[formTitle]}
				type={formType}
				value={formValue}
				onChange={(e) =>
					onChange({
						name: formTitle as keyof FormStates,
						value: e.target.value,
					})
				}
				required
			/>
		</>
	);
};
