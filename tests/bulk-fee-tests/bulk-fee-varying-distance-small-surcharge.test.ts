import { deliveryCalculationResult } from '../../src/services/calculator-service';

describe('varying distance, 5 or more items incurs bulk fee', () => {
	test('4 items, no surchage', () => {
		expect(
			deliveryCalculationResult({
				cartValue: 9,
				deliveryDistance: 999,
				numberOfItems: 4,
				orderTime: '2024-01-24T09:27',
				reset: null,
			}),
		).toBe(3);
	});
	test('5 items, 1000m', () => {
		expect(
			deliveryCalculationResult({
				cartValue: 8,
				deliveryDistance: 1000,
				numberOfItems: 5,
				orderTime: '2024-01-24T09:27',
				reset: null,
			}),
		).toBe(4.5);
	});
	test('10 items, 1499m', () => {
		expect(
			deliveryCalculationResult({
				cartValue: 7,
				deliveryDistance: 1499,
				numberOfItems: 10,
				orderTime: '2024-01-24T09:27',
				reset: null,
			}),
		).toBe(9);
	});
	test('13 items, 1500m', () => {
		expect(
			deliveryCalculationResult({
				cartValue: 6,
				deliveryDistance: 1500,
				numberOfItems: 13,
				orderTime: '2024-01-24T09:27',
				reset: null,
			}),
		).toBe(12.7);
	});
	test('14 items, 1501m', () => {
		expect(
			deliveryCalculationResult({
				cartValue: 5,
				deliveryDistance: 1501,
				numberOfItems: 14,
				orderTime: '2024-01-24T09:27',
				reset: null,
			}),
		).toBe(15);
	});
	test('14 items, 50000m', () => {
		expect(
			deliveryCalculationResult({
				cartValue: 4,
				deliveryDistance: 50000,
				numberOfItems: 14,
				orderTime: '2024-01-24T09:27',
				reset: null,
			}),
		).toBe(15);
	});
});
