import { deliveryCalculationResult } from '../../src/service/calculator-service';

/*
First 1000 meters (=1km) is 2€.
1€ is added for every additional 500 meters.
Even if the distance would be shorter than 500 meters, the minimum fee is always 1€.
-> 1499 meters: 2€ base fee + 1€ for the additional 500 m => 3€
-> 1500 meters: 2€ base fee + 1€ for the additional 500 m => 3€
-> 1501 meters: 2€ base fee + 1€ for the first 500 m + 1€ for the second 500 m => 4€
 */

describe('every 500 with small order surcharge', () => {
	test('distance = 999m', () => {
		// 2 (<1000m) + (10 - 1) (small item surcharge) = 11
		expect(
			deliveryCalculationResult({
				cartValue: 1,
				deliveryDistance: 999,
				amountOfItems: 1,
				orderTime: '2024-01-24T09:27',
			})
		).toBe(11);
	});
	test('distance = 1000m', () => {
		// 2 (<1000m) + (10 - 4) (small item surcharge) = 8
		expect(
			deliveryCalculationResult({
				cartValue: 4,
				deliveryDistance: 1000,
				amountOfItems: 1,
				orderTime: '2024-01-24T09:27',
			})
		).toBe(8);
	});
	test('distance = 1499m', () => {
		// 3 (<1501m) + (10 - 5) (small item surcharge) = 8
		expect(
			deliveryCalculationResult({
				cartValue: 5,
				deliveryDistance: 1499,
				amountOfItems: 1,
				orderTime: '2024-01-24T09:27',
			})
		).toBe(8);
	});
	test('distance = 1500m', () => {
		// 3 (<1501m) + (10 - 7) (small item surcharge) = 6
		expect(
			deliveryCalculationResult({
				cartValue: 7,
				deliveryDistance: 1499,
				amountOfItems: 1,
				orderTime: '2024-01-24T09:27',
			})
		).toBe(6);
	});
	test('distance = 1501m', () => {
		// 4 (<2001m) + (10 - 9) (small item surcharge) = 5
		expect(
			deliveryCalculationResult({
				cartValue: 9,
				deliveryDistance: 1501,
				amountOfItems: 1,
				orderTime: '2024-01-24T09:27',
			})
		).toBe(5);
	});
	test('distance = 50000m, shouldnt be more than 15e', () => {
		//edge case
		expect(
			deliveryCalculationResult({
				cartValue: 9,
				deliveryDistance: 50000,
				amountOfItems: 1,
				orderTime: '2024-01-24T09:27',
			})
		).toBe(15);
	});
});
