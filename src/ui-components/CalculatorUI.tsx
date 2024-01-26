import styled from 'styled-components';

export const Button = styled.button`
	background-color: #4f46e5;
	width: 100%;
	color: #ffffff;
	border-radius: 0.5rem;
	padding: 0.5rem 1rem;
	font-size: 1rem;
	line-height: 1.5rem;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	margin: 1rem auto;
	&:hover {
		background-color: #3730a3;
	}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	margin: 4rem auto;
`;

export const FeeContainerParagraph = styled.p`
	display: flex;
	flex-direction: row;
	margin-top: 0.5rem;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
`;

export const FeeContainerSpan = styled.span`
	color: #ffffff;
	font-size: 3rem;
	font-weight: bold;
`;

export const Fieldset = styled.fieldset`
	border: none;
	padding: 0;
	margin: 0;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 20rem;
	height: fit-content;
	background-color: #1f2937;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	padding: 3.5rem;
	margin-bottom: 2rem;
	border-radius: 1rem;
`;

export const Input = styled.input`
	width: 16rem;
	padding: 0.5rem 1rem;
	border-radius: 0.5rem;
	border: 1px solid #6b7280;
	background-color: #1e293b;
	color: #a5b4fc;
	margin-bottom: 1rem;
	margin-right: 0.5rem;
	&:focus {
		outline: 2px solid #4f46e5;
		border: 1px solid #4f46e5;
	}
`;

export const Label = styled.label`
	display: block;
	color: #ffffff;
	font-size: 1rem;
	font-weight: bold;
	margin-bottom: 0.5rem;
`;
export const Paragraph = styled.p`
	margin: 0;
	color: #ffffff;
	font-size: 1rem;
`;

export const Span = styled.span`
	color: #ffffff;
	font-size: 1rem;
`;
export const Title = styled.h1`
	margin-bottom: 2rem;
	font-style: bold;
	font-size: 2.25rem;
	line-height: 1.8rem;
	color: #ffffff;
`;
