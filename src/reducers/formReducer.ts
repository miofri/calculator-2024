import { FormStates, FormAction } from '../interfaces/CalculatorModels';

export const formReducer = (
	state: FormStates,
	action: FormAction
): FormStates => {
	return {
		...state,
		[action.name]: action.value,
	};
};
