import React from 'react';
import { FormTemplateModel } from '../interfaces/FormTemplateModel';
import { FormStates } from '../interfaces/CalculatorModels';

export const FormTemplate = ({
	formType,
	formTitle,
	formLabel,
	formSpanLabel,
	formValue,
	onChange,
}: FormTemplateModel) => {
	return (
		<div className="mb-4">
			<label
				htmlFor={formTitle}
				className="block text-white text-sm font-bold mb-2"
			>
				{formLabel}
			</label>
			<input
				className="input input-bordered input-primary w-full max-w-sm"
				type={formType}
				min={formType === 'datetime-local' ? new Date().toISOString() : 1}
				name={formTitle}
				id={formTitle}
				value={formValue}
				onChange={(e) =>
					onChange({
						name: formTitle as keyof FormStates,
						value: e.target.value,
					})
				}
				required
			/>
			<span className="ml-3">{formSpanLabel}</span>
		</div>
	);
};
