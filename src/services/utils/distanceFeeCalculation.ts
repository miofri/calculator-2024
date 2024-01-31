/* eslint-disable no-mixed-spaces-and-tabs */
import { FormStates } from '../../interfaces/formDataModel';

/*
 * Math.ceil ensures that if the calculation result is more than a whole number (e.g. 0.002 or 1.021),
 * it will be rounded up to the next whole number (e.g. 1 or 2), which is added to the delivery fee.s
 */
export const distanceFeeCalculation = (
	BASE_DELIVERY_DISTANCE: number,
	BASE_FEE: number,
	DELIVERY_DISTANCE_THRESHOLD: number,
	MAX_FEE: number,
	deliveryDistance: FormStates['deliveryDistance'],
): number => {
	let deliveryFee =
		deliveryDistance <= BASE_DELIVERY_DISTANCE
			? BASE_FEE
			: BASE_FEE +
				Math.ceil(
					(deliveryDistance - BASE_DELIVERY_DISTANCE) /
						DELIVERY_DISTANCE_THRESHOLD,
				);

	if (deliveryFee > MAX_FEE) {
		deliveryFee = MAX_FEE;
	}
	return deliveryFee;
};
