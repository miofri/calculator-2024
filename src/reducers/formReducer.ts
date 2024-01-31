import { FormStates, FormAction } from '../interfaces/formDataModel';

/**
 * Reducer for formData, which stores input values of the form.
 * Decision to use this was because Redux would be an overkill for this app, and using useReducer is a good solution for 'local' state management without prop drilling.
 */
export const formReducer = (
	state: FormStates,
	action: FormAction,
): FormStates => {
	switch (action.type) {
		case 'UPDATE':
			return {
				...state,
				[action.name]: action.value,
			};
		case 'RESET':
			return {
				cartValue: 0,
				deliveryDistance: 0,
				numberOfItems: 0,
				orderTime: '',
				reset: null,
			};
		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
};
