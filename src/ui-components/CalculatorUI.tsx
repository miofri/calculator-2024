import styled from 'styled-components';

export const BodyBackground = styled.div`
	width: 100%;
	height: 100%;
	min-height: 100vh;
	background-color: ${(props) => props.theme.bodyBackground};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Button = styled.button`
	background-color: ${(props) => props.theme.buttonPrimary};
	width: 100%;
	color: #fff;
	border-radius: 0.5rem;
	padding: 0.5rem 1rem;
	font-size: 1rem;
	line-height: 1.5rem;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	margin: 1rem auto;
	&:hover {
		background-color: ${(props) => props.theme.buttonPrimaryHover};
		transform: scale(1.01);
	}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Fieldset = styled.fieldset`
	border: none;
	padding: 0;
	margin: 0;
	width: 18rem;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 20rem;
	height: fit-content;
	background-color: ${(props) => props.theme.formBackground};
	box-shadow: ${(props) => props.theme.formBoxShadow};
	padding: 3.5rem;
	border-radius: 1rem;
`;

export const Input = styled.input`
	width: 87%;
	padding: 0.5rem 1rem;
	border-radius: 0.5rem;
	border: 1px solid #6b7280;
	background-color: ${(props) => props.theme.inputBackgroundColor};
	color: ${(props) => props.theme.inputTextColor};
	margin-bottom: 1rem;
	&:focus {
		outline: 2px solid #4f46e5;
		border: 1px solid #4f46e5;
	}
`;

export const Label = styled.label`
	display: block;
	color: ${(props) => props.theme.text};
	font-size: 1rem;
	font-weight: bold;
	margin-bottom: 0.5rem;
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
	padding: 0.5rem 1rem;
	grid-area: button;
`;

export const Title = styled.h1`
	font-style: bold;
	font-size: 2.25rem;
	line-height: 1.8rem;
	color: ${(props) => props.theme.text};
	width: fit-content;
	grid-area: title;
`;

export const TitleContainer = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 6fr 1fr;
	grid-template-areas: 'empty title button';
`;

export const TotalFeeContainer_Paragraph = styled.p`
	display: flex;
	flex-direction: row;
	margin-top: 0.5rem;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
`;

export const TotalFeeContainer_Span = styled.span`
	color: ${(props) => props.theme.text};
	font-size: 3rem;
	font-weight: bold;
`;
