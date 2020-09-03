import styled from "styled-components";

const Paragraph = styled.p`
  color: ${({ theme }) => theme.grey200};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.light};
  padding: 15px;
`;

export default Paragraph;
