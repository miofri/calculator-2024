import React from 'react';
import { FormTemplateModel } from '../interfaces/FormTemplateModel';
import { FormStates } from '../interfaces/CalculatorModels';
import * as Styled from '../ui-components/CalculatorUI';

export const FormTemplate = ({
	formType,
	formTitle,
	formLabel,
	formSpanLabel,
	formValue,
	formPlaceholder,
	onChange,
}: FormTemplateModel) => {
	return (
		<>
			<Styled.Label htmlFor={formTitle}>{formLabel}</Styled.Label>
			<Styled.Input
				data-testid={formTitle}
				data-test-id={formTitle}
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
			<Styled.Span>{formSpanLabel}</Styled.Span>
		</>
	);
};
