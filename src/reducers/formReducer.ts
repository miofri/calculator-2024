import { FormStates, FormAction } from '../interfaces/formDataModel';

/**
 * Reducer for formData, which stores input values of the form.
 * Decision to use this was because Redux would be an overkill for this app, and using useReducer is a good solution for 'local' state management without prop drilling.
 */
export const formReducer = (
	state: FormStates,
	action: FormAction,
): FormStates => {
	return {
		...state,
		[action.name]: action.value,
	};
};
