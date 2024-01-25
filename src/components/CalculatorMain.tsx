import React, { useReducer } from 'react';
import { FormTemplate } from './FormTemplate';
import { deliveryCalculationResult } from '../services/calculator-service';
import { FormStates } from '../interfaces/CalculatorModels';
import { formReducer } from '../reducers/formReducer';
import { checkMinIsOne } from './utils/checkMinIsOne';
import { log } from 'console';

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
		<div className="container flex flex-col items-center justify-center mx-auto h-screen w-screen ">
			<h1 className="mb-4 font-bold text-3xl text-white">
				Delivery calculator
			</h1>
			<form
				className="flex flex-col justify-center align-middle w-1/3 h-fit bg-slate-900 shadow-md px-8 pt-6 pb-8 mb-4 rounded-xl"
				onSubmit={(e) => handleSubmit(e)}
			>
				<fieldset>
					<legend className="visually-hidden">
						Delivery information to be calculated
					</legend>
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
						formSpanLabel=""
						formValue={formData.orderTime || ''}
						onChange={setFormData}
					/>
					<button
						data-testid="submit"
						type="submit"
						className="btn btn-primary mt-4 mb-4 w-full"
					>
						Calculate delivery price
					</button>
					<p className="flex flex-row justify-center">
						<span className="text-white text-3xl font-bold" data-testid="fee">
							{deliveryPrice}
						</span>
						<span className="text-white text-3xl font-bold">€</span>
					</p>
				</fieldset>
			</form>
		</div>
	);
};
