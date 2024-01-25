import { deliveryCalculationResult } from '../../src/service/calculator-service';

describe('basic distance, 5 or more items incurs bulk fee', () => {
	test('4 items, no surchage', () => {
		expect(
			deliveryCalculationResult({
				cartValue: 10,
				deliveryDistance: 999,
				amountOfItems: 4,
				orderTime: '2024-01-24T09:27',
			})
		).toBe(2);
	});
	test('5 items, 1000m', () => {
		expect(
			deliveryCalculationResult({
				cartValue: 10,
				deliveryDistance: 1000,
				amountOfItems: 5,
				orderTime: '2024-01-24T09:27',
			})
		).toBe(2.5);
	});
	test('10 items, 1499m', () => {
		expect(
			deliveryCalculationResult({
				cartValue: 10,
				deliveryDistance: 1499,
				amountOfItems: 10,
				orderTime: '2024-01-24T09:27',
			})
		).toBe(6);
	});
	test('13 items, 1500m', () => {
		expect(
			deliveryCalculationResult({
				cartValue: 10,
				deliveryDistance: 1500,
				amountOfItems: 13,
				orderTime: '2024-01-24T09:27',
			})
		).toBe(8.7);
	});
	test('14 items, 1501m', () => {
		expect(
			deliveryCalculationResult({
				cartValue: 10,
				deliveryDistance: 1501,
				amountOfItems: 14,
				orderTime: '2024-01-24T09:27',
			})
		).toBe(10.2);
	});
	test('14 items, 50000m', () => {
		expect(
			deliveryCalculationResult({
				cartValue: 10,
				deliveryDistance: 50000,
				amountOfItems: 14,
				orderTime: '2024-01-24T09:27',
			})
		).toBe(15);
	});
});
