import { FormStates } from './formDataModel';

export interface FormTemplateModel {
	formType: string;
	formTitle: string;
	formLabel: string;
	formUnitLabel: string;
	formValue: number | string;
	formPlaceholder: string | undefined;
	onChange: (e: { name: keyof FormStates; value: string }) => void;
}
