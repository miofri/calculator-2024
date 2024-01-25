import { deliveryCalculationResult } from '../../src/services/calculator-service';

describe('every 500m with friday rush', () => {
	test('distance = 999m', () => {
		// 9 (small item surcharge) + 2 (delivery) = 11 * 1.2 (friday rush) = 13.2
		expect(
			deliveryCalculationResult({
				cartValue: 1,
				deliveryDistance: 999,
				amountOfItems: 1,
				orderTime: '2024-01-26T15:00',
			})
		).toBe(13.2);
	});
	test('distance = 1000m', () => {
		// 6 (small item surcharge) + 2 (delivery) = 8 * 1.2 (friday rush) = 9.6
		expect(
			deliveryCalculationResult({
				cartValue: 4,
				deliveryDistance: 1000,
				amountOfItems: 1,
				orderTime: '2024-01-26T16:00',
			})
		).toBe(9.6);
	});
	test('distance = 1499m', () => {
		// 3 (small item surcharge) + 3 (delivery) = 6 * 1.2 (small item surcharge) = 7.2
		expect(
			deliveryCalculationResult({
				cartValue: 7,
				deliveryDistance: 1499,
				amountOfItems: 1,
				orderTime: '2024-01-26T17:00',
			})
		).toBe(7.2);
	});
	test('distance = 1500m', () => {
		// 1 (small item surcharge) + 3 (delivery) = 4 * 1.2 (friday rush) = 4.8
		expect(
			deliveryCalculationResult({
				cartValue: 9,
				deliveryDistance: 1500,
				amountOfItems: 1,
				orderTime: '2024-01-26T18:00',
			})
		).toBe(4.8);
	});
	test('distance = 1501m', () => {
		// 8 (small item surcharge) + 4 (delivery) = 12 * 1.2 (friday rush) = 14.4
		expect(
			deliveryCalculationResult({
				cartValue: 2,
				deliveryDistance: 1501,
				amountOfItems: 1,
				orderTime: '2024-01-26T18:59',
			})
		).toBe(14.4);
	});
	test('distance = 35000m', () => {
		// should be 15
		expect(
			deliveryCalculationResult({
				cartValue: 3,
				deliveryDistance: 35000,
				amountOfItems: 1,
				orderTime: '2024-01-26T19:00',
			})
		).toBe(15);
	});
});
