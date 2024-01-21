import { log } from 'console';
import { FormAction, FormStates } from '../interfaces/CalculatorModels';

export const formReducer = (
	state: FormStates,
	action: FormAction
): FormStates => {
	return {
		...state,
		[action.name]: action.value,
	};
};

export const deliveryCalculationResult = (formData: FormStates): void => {
	// let deliveryFee =
	// 	formData.deliveryDistance! <= 1000
	// 		? 2
	// 		: 2 + Math.ceil((formData.deliveryDistance! - 1000) / 500);
	// if (deliveryFee > 15) {
	// 	deliveryFee = 15;
	// } else if (formData.cartValue! >= 200) {
	// 	deliveryFee = 0;
	// }
	// const cartValuesurcharge =
	// 	formData.cartValue! < 10 ? 10 - formData.cartValue! : 0;
	// let bulkSurcharge =
	// 	formData.amountOfItems! < 5 ? 0 : formData.amountOfItems! - 4 * 0.5;
	// if (formData.amountOfItems! > 12) {
	// 	bulkSurcharge = bulkSurcharge + 1.2;
	// }
	console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);

	console.log(formData.orderTime);
};
