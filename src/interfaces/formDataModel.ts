export interface FormStates {
	cartValue: number;
	deliveryDistance: number;
	numberOfItems: number;
	orderTime: string;
	reset: null;
}

export interface FormAction {
	name: keyof FormStates;
	value: string | number;
	type: string;
}
