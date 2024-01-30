import React from 'react';
import { FormInputTemplate } from './FormInputTemplate';
import { FormsProps } from '../interfaces/FormProps';

export const Forms: React.FC<FormsProps> = ({
	formData,
	setFormData,
}: FormsProps) => {
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
