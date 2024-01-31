export interface FormStates {
	cartValue: number;
	deliveryDistance: number;
	numberOfItems: number;
	orderTime: string;
}

export interface FormAction {
	name: keyof FormStates;
	value: string | number;
}
