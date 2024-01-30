import React from 'react';
import 'jest-styled-components';
import { render, fireEvent } from '@testing-library/react';
import { CalculatorMain } from '../../src/components/DeliveryFeeCalculator';

describe('toggling theme', () => {
	test('dark theme expected upon initial render', () => {
		const { getByTestId } = render(<CalculatorMain />);

		expect(getByTestId('body-container')).toHaveStyleRule(
			'background-color: #111827'
		);
		expect(getByTestId('form')).toHaveStyleRule('background-color: #1f2937');
		expect(getByTestId('form')).toHaveStyleRule('color: #fff');
	});

	test('light theme expected upon toggling', () => {
		const { getByTestId } = render(<CalculatorMain />);
		const themeTogglerButton = getByTestId('theme-toggler');

		fireEvent.click(themeTogglerButton);
		expect(getByTestId('body-container')).toHaveStyleRule(
			'background-color: #F5F5F5'
		);
		expect(getByTestId('form')).toHaveStyleRule('background-color: #e2e8f0');
		expect(getByTestId('form')).toHaveStyleRule('color: #334155');
	});
});

describe('inputing negative values', () => {
	test('basic DOM test, expecting 0', () => {
		const { getByTestId } = render(<CalculatorMain />);
		const feeBefore = getByTestId('fee').textContent;

		fireEvent.change(getByTestId('cartValue'), { target: { value: '200' } });
		fireEvent.change(getByTestId('deliveryDistance'), {
			target: { value: '999' },
		});
		fireEvent.change(getByTestId('amountOfItems'), { target: { value: '12' } });
		fireEvent.change(getByTestId('orderTime'), {
			target: { value: '2024-01-25T19:41:29+0000' },
		});
		fireEvent.click(getByTestId('submit'));

		expect(getByTestId('fee').textContent).toEqual(feeBefore);
	});

	test('inputting negative values, expecting error', () => {
		const { getByTestId } = render(<CalculatorMain />);
		const feeBefore = getByTestId('fee').textContent;

		fireEvent.change(getByTestId('cartValue'), { target: { value: '-1' } });
		fireEvent.change(getByTestId('deliveryDistance'), {
			target: { value: '999' },
		});
		fireEvent.change(getByTestId('amountOfItems'), { target: { value: '12' } });
		fireEvent.change(getByTestId('orderTime'), {
			target: { value: '2024-01-25T19:41:29+0000' },
		});
		fireEvent.click(getByTestId('submit'));

		expect(getByTestId('fee').textContent).toEqual(feeBefore);
	});

	test('inputting negative values, expecting error', () => {
		const { getByTestId } = render(<CalculatorMain />);
		const feeBefore = getByTestId('fee').textContent;

		fireEvent.change(getByTestId('cartValue'), { target: { value: '1' } });
		fireEvent.change(getByTestId('deliveryDistance'), {
			target: { value: '-1' },
		});
		fireEvent.change(getByTestId('amountOfItems'), {
			target: { value: '12' },
		});
		fireEvent.change(getByTestId('orderTime'), {
			target: { value: '2024-01-25T19:41:29+0000' },
		});
		fireEvent.click(getByTestId('submit'));

		expect(getByTestId('fee').textContent).toEqual(feeBefore);
	});

	test('inputting negative values, expecting error', () => {
		const { getByTestId } = render(<CalculatorMain />);
		const feeBefore = getByTestId('fee').textContent;

		fireEvent.change(getByTestId('cartValue'), { target: { value: '-1' } });
		fireEvent.change(getByTestId('deliveryDistance'), {
			target: { value: '999' },
		});
		fireEvent.change(getByTestId('amountOfItems'), {
			target: { value: '-1' },
		});
		fireEvent.change(getByTestId('orderTime'), {
			target: { value: '2024-01-25T19:41:29+0000' },
		});
		fireEvent.click(getByTestId('submit'));

		expect(getByTestId('fee').textContent).toEqual(feeBefore);
	});

	test('inputting negative values, expecting error', () => {
		const { getByTestId } = render(<CalculatorMain />);
		const feeBefore = getByTestId('fee').textContent;

		fireEvent.change(getByTestId('cartValue'), { target: { value: '-1' } });
		fireEvent.change(getByTestId('deliveryDistance'), {
			target: { value: '999' },
		});
		fireEvent.change(getByTestId('amountOfItems'), {
			target: { value: '12' },
		});
		fireEvent.change(getByTestId('orderTime'), {
			target: { value: '' },
		});
		fireEvent.click(getByTestId('submit'));
		expect(getByTestId('fee').textContent).toEqual(feeBefore);
	});
});
