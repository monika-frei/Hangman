import styled from "styled-components";

const Input = styled.input`
  border: none;
  width: 70px;
  height: 70px;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-family: ${({ theme }) => theme.fontFamilySecondary};
  background-color: ${({ theme }) => theme.grey200};
  text-align: center;
  outline: none;
  box-shadow: 0 0 10px ${({ theme }) => theme.grey300};
  padding: 20px;
`;

export default Input;
