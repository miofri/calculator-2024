import { FormAction, FormStates } from './formDataModel';

export interface FormsPropsModel {
	formData: FormStates;
	setFormData: React.Dispatch<FormAction>;
}
