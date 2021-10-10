import styled from 'styled-components';

export const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const CheckMark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 24px;
  width: 24px;
  border: 2px solid ${({theme}) => theme.border.lighten};
  border-radius: 7px;
  &::after {
    content: '';
    position: absolute;
    display: none;
    margin: auto;
    left: 0;
    right: 0;
    top: 3px;
    text-align: center;
    width: 6px;
    height: 12px;
    border: solid ${({theme}) => theme.border.primary};
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

export const Name = styled.div`
  padding-left: 10px;
  text-transform: capitalize;
  font-size: 16px;
  line-height: 140%;
`;

export const Container = styled.label`
  display: grid;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  &:hover ${Input} ~ ${CheckMark} {
    background-color: inherit;
  }
  & ${Input}:checked ~ ${CheckMark} {
    border: 2px solid ${({theme}) => theme.border.primary};
  }
  & ${Input}:checked ~ ${CheckMark}:after {
    display: block;
  }
`;
