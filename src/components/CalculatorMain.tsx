import React, { useReducer } from 'react';
import { FormTemplate } from './FormTemplate';
import {
	formReducer,
	deliveryCalculationResult,
} from '../service/calculator-service';

export const CalculatorMain = () => {
	const [formData, setFormData] = useReducer(formReducer, {});
	const [deliveryPrice, setDeliveryPrice] = React.useState(0);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		deliveryCalculationResult(formData);
	};

	// ADD CHECK TO INPUT!!!! DO NOT ALLOW TO INPUT NEGATIVE VALUES OR 0 !!!!! (use min="1" in input tag) !!!!!

	return (
		<div className="container flex flex-col items-center justify-center mx-auto h-screen w-screen ">
			<h1 className="mb-4 font-bold text-3xl text-white">
				Delivery calculator
			</h1>
			<form
				className="flex flex-col justify-center align-middle w-1/3 h-fit bg-slate-900 shadow-md px-8 pt-6 pb-8 mb-4 rounded-xl"
				onSubmit={(e) => handleSubmit(e)}
			>
				<FormTemplate
					formType="number"
					formTitle="cartValue"
					formLabel="Cart value"
					formSpanLabel="€"
					formValue={formData.cartValue || ''}
					onChange={setFormData}
				/>
				<FormTemplate
					formType="number"
					formTitle="deliveryDistance"
					formLabel="Delivery distance"
					formSpanLabel="m"
					formValue={formData.deliveryDistance || ''}
					onChange={setFormData}
				/>
				<FormTemplate
					formType="number"
					formTitle="amountOfItems"
					formLabel="Amount of items"
					formSpanLabel="items"
					formValue={formData.amountOfItems || ''}
					onChange={setFormData}
				/>
				<FormTemplate
					formType="datetime-local"
					formTitle="orderTime"
					formLabel="Order time"
					formSpanLabel="time"
					formValue={formData.orderTime || ''}
					onChange={setFormData}
				/>
				<button type="submit" className="btn btn-primary mb-4">
					Calculate delivery price
				</button>
				<div className="flex flex-row justify-center">
					<span className="text-white text-3xl font-bold">
						{deliveryPrice} €
					</span>
				</div>
			</form>
		</div>
	);
};
