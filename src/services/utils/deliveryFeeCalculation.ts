/* eslint-disable no-mixed-spaces-and-tabs */
import { FormStates } from '../../interfaces/CalculatorModels';

export const deliveryFeeCalculation = (
	BASE_DELIVERY_DISTANCE: number,
	BASE_FEE: number,
	DELIVERY_DISTANCE_THRESHOLD: number,
	MAX_FEE: number,
	deliveryDistance: FormStates['deliveryDistance']
) => {
	let deliveryFee =
		deliveryDistance <= BASE_DELIVERY_DISTANCE
			? BASE_FEE
			: BASE_FEE +
			  Math.ceil(
					(deliveryDistance - BASE_DELIVERY_DISTANCE) /
						DELIVERY_DISTANCE_THRESHOLD
			  );

	if (deliveryFee > MAX_FEE) {
		deliveryFee = MAX_FEE;
	}
	return deliveryFee;
};
