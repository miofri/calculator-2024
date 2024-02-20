import { deliveryCalculationResult } from '../../src/services/calculator-service';

describe('basic distance, 5 or more items (numberOfItems) incurs bulk fee', () => {
	test('4 items, no surchage', () => {
		expect(
			deliveryCalculationResult({
				cartValue: 10,
				deliveryDistance: 1000,
				numberOfItems: 4,
				orderTime: '2024-01-24T09:27',
				reset: null,
			}),
		).toBe(2);
	});
	test('5 items', () => {
		expect(
			deliveryCalculationResult({
				cartValue: 10,
				deliveryDistance: 1000,
				numberOfItems: 5,
				orderTime: '2024-01-24T09:27',
				reset: null,
			}),
		).toBe(2.5);
	});
	test('10 items', () => {
		expect(
			deliveryCalculationResult({
				cartValue: 10,
				deliveryDistance: 1000,
				numberOfItems: 10,
				orderTime: '2024-01-24T09:27',
				reset: null,
			}),
		).toBe(5);
	});
	test('13 items', () => {
		expect(
			deliveryCalculationResult({
				cartValue: 10,
				deliveryDistance: 1000,
				numberOfItems: 13,
				orderTime: '2024-01-24T09:27',
				reset: null,
			}),
		).toBe(7.7);
	});
	test('14 items', () => {
		expect(
			deliveryCalculationResult({
				cartValue: 10,
				deliveryDistance: 1000,
				numberOfItems: 14,
				orderTime: '2024-01-24T09:27',
				reset: null,
			}),
		).toBe(8.2);
	});
});
