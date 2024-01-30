import { FormAction, FormStates } from './CalculatorModels';

export interface FormsProps {
	formData: FormStates;
	setFormData: React.Dispatch<FormAction>;
}
