import { deliveryCalculationResult } from '../../src/services/calculator-service';

/*
	INPUTS FOR deliveryCalculationResult
	cartValue?: number;
	deliveryDistance?: number;
	numberOfItems?: number;
	orderTime?: string;
*/

describe('every 500m beyond 999m adds 1e', () => {
	test('distance = 999m', () => {
		expect(
			deliveryCalculationResult({
				cartValue: 12,
				deliveryDistance: 999,
				numberOfItems: 1,
				orderTime: '2024-01-24T09:27',
				reset: null,
			}),
		).toBe(2);
	});
	test('distance = 1000m', () => {
		expect(
			deliveryCalculationResult({
				cartValue: 12,
				deliveryDistance: 1000,
				numberOfItems: 1,
				orderTime: '2024-01-24T09:27',
				reset: null,
			}),
		).toBe(2);
	});
	test('distance = 1499m', () => {
		expect(
			deliveryCalculationResult({
				cartValue: 12,
				deliveryDistance: 1499,
				numberOfItems: 1,
				orderTime: '2024-01-24T09:27',
				reset: null,
			}),
		).toBe(3);
	});
	test('distance = 1500m', () => {
		expect(
			deliveryCalculationResult({
				cartValue: 12,
				deliveryDistance: 1500,
				numberOfItems: 1,
				orderTime: '2024-01-24T09:27',
				reset: null,
			}),
		).toBe(3);
	});
	test('distance = 1501m', () => {
		expect(
			deliveryCalculationResult({
				cartValue: 12,
				deliveryDistance: 1501,
				numberOfItems: 1,
				orderTime: '2024-01-24T09:27',
				reset: null,
			}),
		).toBe(4);
	});
	test('distance = 50000m, shouldnt be more than 15e', () => {
		expect(
			deliveryCalculationResult({
				cartValue: 12,
				deliveryDistance: 50000,
				numberOfItems: 1,
				orderTime: '2024-01-24T09:27',
				reset: null,
			}),
		).toBe(15);
	});
});
