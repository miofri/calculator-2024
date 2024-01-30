import { FormStates } from '../interfaces/CalculatorModels';
import { deliveryFeeCalculation } from './utils/deliveryFeeCalculation';

const BASE_FEE = 2; //euros
const MAX_FEE = 15; //euros
const SMALL_PURCHASE_FEE_THRESHOLD = 10; //euros

const BULK_ITEM_THRESHOLD = 5; //items
const BULK_SURCHARGE_FEE = 0.5; //euros
const BIG_BULK_ITEM_THRESHOLD = 12; //items
const BIG_BULK_SURCHARGE_FEE = 1.2; //euros

const FREE_DELIVERY_DISTANCE_THRESHOLD = 200; //meters
const BASE_DELIVERY_DISTANCE = 1000; //meters
const DELIVERY_DISTANCE_THRESHOLD = 500; //meters

export const deliveryCalculationResult = (formData: FormStates): number => {
	const deliveryFee = deliveryFeeCalculation(
		BASE_DELIVERY_DISTANCE,
		BASE_FEE,
		DELIVERY_DISTANCE_THRESHOLD,
		MAX_FEE,
		formData.deliveryDistance
	);

	const cartValueSurcharge =
		formData.cartValue < SMALL_PURCHASE_FEE_THRESHOLD
			? SMALL_PURCHASE_FEE_THRESHOLD - formData.cartValue
			: 0;

	let bulkSurcharge =
		formData.amountOfItems < BULK_ITEM_THRESHOLD
			? 0
			: (formData.amountOfItems - 4) * BULK_SURCHARGE_FEE;

	if (formData.amountOfItems > BIG_BULK_ITEM_THRESHOLD) {
		bulkSurcharge = bulkSurcharge + BIG_BULK_SURCHARGE_FEE;
	}

	const total = deliveryFee + cartValueSurcharge + bulkSurcharge;

	const dateOfOrder = new Date(formData.orderTime!);
	const isFriday = dateOfOrder.getDay() === 5;
	const hour = dateOfOrder.getHours();

	if (formData.cartValue! >= FREE_DELIVERY_DISTANCE_THRESHOLD) return 0;

	if (isFriday && hour >= 15 && hour < 19) {
		const finalTotal = Math.round(total * 1.2 * 10) / 10;
		return finalTotal > MAX_FEE ? MAX_FEE : finalTotal;
	}

	if (total > 15) return 15;

	return total;
};
