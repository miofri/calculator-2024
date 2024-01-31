import React from 'react';
import 'jest-styled-components';
import { render, fireEvent } from '@testing-library/react';
import { DeliveryFeeCalculator } from '../../src/components/DeliveryFeeCalculator';

describe('toggling theme', () => {
	let container: HTMLElement | null;
	let bodyContainer: Element | null;
	let form: Element | null;
	let themeTogglerButton: Element | null;

	beforeEach(() => {
		container = render(<DeliveryFeeCalculator />).container;
		bodyContainer = container.querySelector('[data-test-id="body-container"]');
		form = container.querySelector('[data-test-id="form"]');
		themeTogglerButton = container.querySelector(
			'[data-test-id="theme-toggler"]',
		);
	});

	test('dark theme expected upon initial render', () => {
		expect(bodyContainer).toHaveStyleRule('background-color: #111827');
		expect(form).toHaveStyleRule('background-color: #1f2937');
		expect(form).toHaveStyleRule('color: #fff');
	});

	test('light theme expected upon toggling', () => {
		if (!themeTogglerButton) {
			throw new Error('themeTogglerButton not found');
		} else {
			fireEvent.click(themeTogglerButton);
		}

		expect(bodyContainer).toHaveStyleRule('background-color: #F5F5F5');
		expect(form).toHaveStyleRule('background-color: #e2e8f0');
		expect(form).toHaveStyleRule('color: #334155');
	});
});
