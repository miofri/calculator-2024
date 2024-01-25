import { deliveryCalculationResult } from '../../src/service/calculator-service';

describe('every 500m with friday rush', () => {
	test('distance = 999m', () => {
		expect(
			deliveryCalculationResult({
				cartValue: 12,
				deliveryDistance: 999,
				amountOfItems: 1,
				orderTime: '2024-01-26T15:00',
			})
		).toBe(2.4);
	});
	test('distance = 1000m', () => {
		expect(
			deliveryCalculationResult({
				cartValue: 12,
				deliveryDistance: 1000,
				amountOfItems: 1,
				orderTime: '2024-01-26T16:00',
			})
		).toBe(2.4);
	});
	test('distance = 1499m', () => {
		expect(
			deliveryCalculationResult({
				cartValue: 12,
				deliveryDistance: 1499,
				amountOfItems: 1,
				orderTime: '2024-01-26T17:00',
			})
		).toBe(3.6);
	});
	test('distance = 1500m', () => {
		expect(
			deliveryCalculationResult({
				cartValue: 12,
				deliveryDistance: 1500,
				amountOfItems: 1,
				orderTime: '2024-01-26T18:00',
			})
		).toBe(3.6);
	});
	test('distance = 1501m', () => {
		expect(
			deliveryCalculationResult({
				cartValue: 12,
				deliveryDistance: 1501,
				amountOfItems: 1,
				orderTime: '2024-01-26T18:59',
			})
		).toBe(4.8);
	});
	test('distance = 1501m', () => {
		expect(
			deliveryCalculationResult({
				cartValue: 12,
				deliveryDistance: 1501,
				amountOfItems: 1,
				orderTime: '2024-01-26T19:00',
			})
		).toBe(4);
	});
});