import React from 'react';
import { FormTemplate } from './FormTemplate';
import { FormsProps } from '../interfaces/FormProps';

export const Forms: React.FC<FormsProps> = ({
	formData,
	setFormData,
}: FormsProps) => {
	return (
		<>
			<FormTemplate
				formType="number"
				formTitle="cartValue"
				formLabel="Cart value"
				formSpanLabel="€"
				formValue={formData.cartValue || ''}
				formPlaceholder='e.g. "100"'
				onChange={setFormData}
			/>
			<FormTemplate
				formType="number"
				formTitle="deliveryDistance"
				formLabel="Delivery distance"
				formSpanLabel="m"
				formValue={formData.deliveryDistance || ''}
				formPlaceholder='e.g. "1000"'
				onChange={setFormData}
			/>
			<FormTemplate
				formType="number"
				formTitle="amountOfItems"
				formLabel="Amount of items"
				formSpanLabel=""
				formValue={formData.amountOfItems || ''}
				formPlaceholder='e.g. "10"'
				onChange={setFormData}
			/>
			<FormTemplate
				formType="datetime-local"
				formTitle="orderTime"
				formLabel="Order time"
				formSpanLabel=""
				formValue={formData.orderTime || ''}
				formPlaceholder={undefined}
				onChange={setFormData}
			/>
		</>
	);
};
