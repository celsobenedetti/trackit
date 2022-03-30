import styled from 'styled-components';

export default function DayCheckbox({ day, toggle, isChecked }) {
	return <Checkbox onChange={toggle} day={day} checked={isChecked} type="checkbox" />;
}

const Checkbox = styled.input`
	width: 30px;
	height: 30px;
	font-size: var(--font-size-3);
	border-radius: var(--border-radius-1);
	border: var(--input-border);
	color: var(--gray-light);
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0;

	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;

	&::after {
		content: '${(props) => props.day}';
	}

	&:checked {
		background-color: var(--gray-light);
		color: #fff;
	}

	&:focus {
		outline: none;
		border: var(--input-border);
	}
`;