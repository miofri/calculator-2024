import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CalculatorMain } from '../../src/components/CalculatorMain';

describe('testing calculators DOM', () => {
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
