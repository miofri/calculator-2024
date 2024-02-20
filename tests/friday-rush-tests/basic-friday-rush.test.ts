import { deliveryCalculationResult } from '../../src/services/calculator-service';

describe('every 500m with friday rush', () => {
	test('distance = 999m', () => {
		expect(
			deliveryCalculationResult({
				cartValue: 12,
				deliveryDistance: 999,
				numberOfItems: 1,
				orderTime: '2024-01-26T15:00',
				reset: null,
			}),
		).toBe(2.4);
	});
	test('distance = 1000m', () => {
		expect(
			deliveryCalculationResult({
				cartValue: 12,
				deliveryDistance: 1000,
				numberOfItems: 1,
				orderTime: '2024-01-26T16:00',
				reset: null,
			}),
		).toBe(2.4);
	});
	test('distance = 1499m', () => {
		expect(
			deliveryCalculationResult({
				cartValue: 12,
				deliveryDistance: 1499,
				numberOfItems: 1,
				orderTime: '2024-01-26T17:00',
				reset: null,
			}),
		).toBe(3.6);
	});
	test('distance = 1500m', () => {
		expect(
			deliveryCalculationResult({
				cartValue: 12,
				deliveryDistance: 1500,
				numberOfItems: 1,
				orderTime: '2024-01-26T18:00',
				reset: null,
			}),
		).toBe(3.6);
	});
	test('distance = 1501m', () => {
		expect(
			deliveryCalculationResult({
				cartValue: 12,
				deliveryDistance: 1501,
				numberOfItems: 1,
				orderTime: '2024-01-26T18:59',
				reset: null,
			}),
		).toBe(4.8);
	});
	test('distance = 1501m', () => {
		expect(
			deliveryCalculationResult({
				cartValue: 12,
				deliveryDistance: 1501,
				numberOfItems: 1,
				orderTime: '2024-01-26T19:00',
				reset: null,
			}),
		).toBe(4);
	});
});
