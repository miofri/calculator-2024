import React from 'react';
import { FormTemplateModel } from '../interfaces/FormTemplateModel';
import { FormStates } from '../interfaces/CalculatorModels';
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
	return (
		<>
			<Styled.Label htmlFor={formTitle}>
				{formLabel} {formUnitLabel !== '' ? `(${formUnitLabel})` : null}
			</Styled.Label>
			<Styled.Input
				data-testid={formTitle}
				type={formType}
				min={
					formType === 'datetime-local'
						? new Date().toISOString().slice(0, 16)
						: 1
				}
				name={formTitle}
				id={formTitle}
				value={formValue}
				placeholder={formPlaceholder}
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
