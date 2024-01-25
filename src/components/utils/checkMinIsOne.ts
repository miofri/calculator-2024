import { FormStates } from '../../interfaces/CalculatorModels';

export const checkMinIsOne = (formData: FormStates): boolean => {
	const vals = Object.values(formData);
	return vals.some((val) => {
		return val < 1;
	});
};
