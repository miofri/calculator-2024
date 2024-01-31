import React from 'react';
import 'jest-styled-components';
import { render, fireEvent } from '@testing-library/react';
import { DeliveryFeeCalculator } from '../../src/components/DeliveryFeeCalculator';

/**
 * Test for the clear form button. Making sure that the form is cleared and the fee is reset to 0.
 */
describe('clear form test', () => {
	let container: HTMLElement | null;
	let cartValueInput: Element | null;
	let deliveryDistanceInput: Element | null;
	let numberOfItemsInput: Element | null;
	let orderTimeInput: Element | null;
	let fee: Element | null;
	let clearButton: Element | null;

	beforeEach(() => {
		container = render(<DeliveryFeeCalculator />).container;

		numberOfItemsInput = container.querySelector(
			'[data-test-id="numberOfItems"]',
		);
		cartValueInput = container.querySelector('[data-test-id="cartValue"]');
		deliveryDistanceInput = container.querySelector(
			'[data-test-id="deliveryDistance"]',
		);
		fee = container.querySelector('[data-test-id="fee"]');
		orderTimeInput = container.querySelector('[data-test-id="orderTime"]');
		clearButton = container.querySelector('[data-test-id="clear-button"]');
		if (
			!numberOfItemsInput ||
			!cartValueInput ||
			!deliveryDistanceInput ||
			!fee ||
			!orderTimeInput ||
			!clearButton
		) {
			throw new Error('One or more elements could not be found in the DOM!');
		}
	});

	test('basic DOM test, expecting 0', () => {
		//already null checked in beforeEach
		const feeBefore = fee!.textContent;
		fireEvent.change(cartValueInput!, { target: { value: '200' } });
		fireEvent.change(deliveryDistanceInput!, {
			target: { value: '999' },
		});
		fireEvent.change(numberOfItemsInput!, { target: { value: '12' } });
		fireEvent.change(orderTimeInput!, {
			target: { value: '2024-01-25T19:41:29+0000' },
		});
		fireEvent.click(clearButton!);

		expect(fee!.textContent).toEqual(feeBefore);
		expect(cartValueInput!.getAttribute('value')).toEqual('');
		expect(deliveryDistanceInput!.getAttribute('value')).toEqual('');
		expect(numberOfItemsInput!.getAttribute('value')).toEqual('');
		expect(orderTimeInput!.getAttribute('value')).toEqual('');
	});
});
