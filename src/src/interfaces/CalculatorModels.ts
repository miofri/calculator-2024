export interface FormStates {
	cartValue?: number;
	deliveryDistance?: number;
	amountOfItems?: number;
	orderTime?: string;
}

export interface FormAction {
	name: keyof FormStates;
	value: string | number;
}
