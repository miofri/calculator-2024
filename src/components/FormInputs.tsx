import React from 'react';

import { FormInputTemplate } from './FormInputTemplate';
import { FormsPropsModel } from '../interfaces/formPropsModel';

/**
 * Renders several FormInputTemplate components with different props/inputs,
 * and manage the state of formData.
 * Each input is saved to to formData on change with setFormData.
 */
export const Forms: React.FC<FormsPropsModel> = ({
	formData,
	setFormData,
}: FormsPropsModel) => {
	return (
		<>
			<FormInputTemplate
				formType="number"
				formTitle="cartValue"
				formLabel="Cart value"
				formUnitLabel="€"
				formValue={formData.cartValue || ''}
				formPlaceholder='e.g. "100"'
				onChange={setFormData}
			/>
			<FormInputTemplate
				formType="number"
				formTitle="deliveryDistance"
				formLabel="Delivery distance"
				formUnitLabel="m"
				formValue={formData.deliveryDistance || ''}
				formPlaceholder='e.g. "1000"'
				onChange={setFormData}
			/>
			<FormInputTemplate
				formType="number"
				formTitle="amountOfItems"
				formLabel="Amount of items"
				formUnitLabel=""
				formValue={formData.amountOfItems || ''}
				formPlaceholder='e.g. "10"'
				onChange={setFormData}
			/>
			<FormInputTemplate
				formType="datetime-local"
				formTitle="orderTime"
				formLabel="Order time"
				formUnitLabel=""
				formValue={formData.orderTime || ''}
				formPlaceholder={undefined}
				onChange={setFormData}
			/>
		</>
	);
};
