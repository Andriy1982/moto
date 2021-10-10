import styled from 'styled-components';

interface IStyleProps {
  error?: boolean;
  isChecked?: boolean;
  textColour?: boolean;
}

export const Label = styled.label<IStyleProps>`
  background-color: ${({theme, isChecked}) =>
    isChecked ? theme.background.primary : theme.text.light};
  width: 24px;
  height: 24px;
  border-radius: 50%;
  position: absolute;
  ${({isChecked}) => (isChecked ? ` right: 0` : `left: 0`)}
`;

export const Description = styled.p<IStyleProps>`
  font-size: 18px;
  line-height: 25px;
  color: ${({theme, textColour}) => (textColour ? theme.background.primary : theme.text.light_01)};
  ${({theme}) => theme.mediaQueriesMax.sm} {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const Input = styled.input<IStyleProps>`
  margin: 0;
  padding: 0;
  opacity: 0;
  height: 0;
  width: 0;
  pointer-events: none;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WrapSwitch = styled.div`
  display: flex;
  align-items: center;
  transition: color 150ms ease-in 0;
`;

export const colourStyles = {
  control: (styles: any) => ({
    ...styles,
    backgroundColor: '#040404',
    width: '90px',
    height: '30px',
    borderRadius: '29px',
    color: '#F2F2F2',
    borderColor: 'transparent',
    cursor: 'pointer',
  }),
  singleValue: (provided: any, state: any) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    // color: '#F2F2F2';

    return {...provided, opacity, transition, color: '#F2F2F2'};
  },
  indicatorSeparator: (styles: any) => ({
    ...styles,
    display: 'none',
  }),
  menu: (styles: any) => ({
    ...styles,
    backgroundColor: '#040404',
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    color: state.isFocused ? '#20D38F' : 'white',
    backgroundColor: state.isFocused ? '#828282' : '#040404',
  }),

  indicatorsContainer: (provided: any) => ({
    ...provided,
    paddingLeft: 0,
  }),
};
