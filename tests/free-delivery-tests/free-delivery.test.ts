import { deliveryCalculationResult } from '../../src/services/calculator-service';

describe('every 500 with small order surcharge', () => {
	test('distance = 999m', () => {
		expect(
			deliveryCalculationResult({
				cartValue: 199,
				deliveryDistance: 999,
				amountOfItems: 1,
				orderTime: '2024-01-24T09:27',
			}),
		).toBe(2);
	});
	test('distance = 1000m', () => {
		expect(
			deliveryCalculationResult({
				cartValue: 200,
				deliveryDistance: 1000,
				amountOfItems: 1,
				orderTime: '2024-01-24T09:27',
			}),
		).toBe(0);
	});
	test('distance = 1499m', () => {
		expect(
			deliveryCalculationResult({
				cartValue: 201,
				deliveryDistance: 1499,
				amountOfItems: 1,
				orderTime: '2024-01-24T09:27',
			}),
		).toBe(0);
	});
	test('distance = 1500m', () => {
		expect(
			deliveryCalculationResult({
				cartValue: 198,
				deliveryDistance: 1499,
				amountOfItems: 1,
				orderTime: '2024-01-24T09:27',
			}),
		).toBe(3);
	});
	test('distance = 1501m', () => {
		expect(
			deliveryCalculationResult({
				cartValue: 202,
				deliveryDistance: 1501,
				amountOfItems: 1,
				orderTime: '2024-01-24T09:27',
			}),
		).toBe(0);
	});
	test('distance = 50000m, shouldnt be more than 15e', () => {
		expect(
			deliveryCalculationResult({
				cartValue: 500,
				deliveryDistance: 50000,
				amountOfItems: 1,
				orderTime: '2024-01-24T09:27',
			}),
		).toBe(0);
	});
});
