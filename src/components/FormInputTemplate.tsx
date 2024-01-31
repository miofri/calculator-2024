import React from 'react';
import { FormTemplateModel } from '../interfaces/FormTemplateModel';
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
	// Defines the expected step for each input types. cartValue (currency) has a step of 0.01.
	const stepValues: { [key: string]: number } = {
		cartValue: 0.01,
		deliveryDistance: 1,
		amountOfItems: 1,
	};

	return (
		<>
			<Styled.Label htmlFor={formTitle}>
				{formLabel} {formUnitLabel !== '' ? `(${formUnitLabel})` : null}
			</Styled.Label>
			<Styled.Input
				data-test-id={formTitle}
				id={formTitle}
				min={formType === 'datetime-local' ? undefined : 1}
				name={formTitle}
				placeholder={formPlaceholder}
				step={stepValues[formTitle] || undefined}
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
