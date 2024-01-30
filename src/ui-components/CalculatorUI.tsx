import styled from 'styled-components';
import { device } from './breakpoints';

export const FlexStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

/**
 * Container for the whole page, including the background color.
 */
export const BodyContainer = styled(FlexStyle)`
	width: 100%;
	height: 100%;
	min-height: 100vh;
	background-color: ${(props) => props.theme.bodyBackground};
	color-scheme: ${(props) => props.theme.colorScheme};
`;

export const Button = styled.button`
	width: 100%;
	margin: 1rem auto;
	padding: 0.5rem 1rem;
	background-color: ${(props) => props.theme.buttonPrimary};
	color: #fff;
	font-size: 1rem;
	line-height: 1.5rem;
	border: none;
	border-radius: 0.5rem;
	cursor: pointer;
	transition: all 0.2s ease-in-out;

	&:hover {
		background-color: ${(props) => props.theme.buttonPrimaryHover};
		transform: scale(1.01);
	}
`;

/**
 * Container for the calculator, including the title, theme toggler, and the form.
 * Currently empty, but can be used for future styling purposes.
 */
export const CalculatorContainer = styled(FlexStyle)``;

export const Credits = styled.a`
	margin-top: 1rem;
	font-size: 0.7rem;
	color: #9ca3af;
`;

export const Fieldset = styled.fieldset`
	width: 18rem;
	margin: 0;
	padding: 0;
	border: none;
`;

/**
 * Container for the form, including the submit button as well as the delivery fee.
 */
export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 14rem;
	height: fit-content;
	background-color: ${(props) => props.theme.formBackground};
	box-shadow: ${(props) => props.theme.formBoxShadow};
	padding: 3.5rem 3.5rem 2rem 3.5rem;
	border-radius: 1rem;

	@media ${device.xs} {
		width: 14rem;
	}
	@media ${device.sm} {
		width: 16rem;
	}
	@media ${device.md} {
		width: 18rem;
	}
	@media ${device.xxl} {
		width: 20rem;
	}
`;

export const Input = styled.input`
	width: 87%;
	margin-bottom: 1rem;
	padding: 0.5rem 1rem;
	background-color: ${(props) => props.theme.inputBackgroundColor};
	color: ${(props) => props.theme.inputTextColor};
	border-radius: 0.5rem;
	border: 1px solid #6b7280;

	&:focus {
		outline: 2px solid #4f46e5;
		border: 1px solid #4f46e5;
	}
`;

export const Label = styled.label`
	display: block;
	margin-bottom: 0.5rem;
	color: ${(props) => props.theme.text};
	font-size: 1rem;
	font-weight: bold;
`;
export const Paragraph = styled.p`
	margin: 0;
	color: ${(props) => props.theme.text};
	font-size: 1rem;
`;

export const Span = styled.span`
	color: ${(props) => props.theme.text};
	font-size: 1rem;
`;

export const ThemeToggler = styled(Button)`
	width: fit-content;
	padding: 0.2rem 0.6rem;
	grid-area: button;

	@media ${device.xl} {
		padding: 0.5rem 1rem;
	}
`;

export const Title = styled.h1`
	grid-area: title;
	width: fit-content;
	color: ${(props) => props.theme.text};
	font-size: 1.6rem;
	line-height: 1.8rem;

	@media ${device.sm} {
		font-size: 1.8rem;
	}
	@media ${device.xl} {
		font-size: 2rem;
	}
`;

/**
 * Container for the title and the theme toggler.
 */
export const TitleContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 4fr 1fr;
	grid-template-areas: 'empty title button';
	width: 100%;

	@media ${device.xl} {
		grid-template-columns: 1fr 6fr 1fr;
	}
`;

/**
 * Container for "Delivery Fee: " and the total fee.
 */
export const TotalFeeContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 0.5rem;
	margin-bottom: 0;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
`;

export const TotalFeeContainer_Span = styled.span`
	color: ${(props) => props.theme.text};
	font-size: 3rem;
	font-weight: bold;
`;
