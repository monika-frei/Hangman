import styled from "styled-components";

const Heading = styled.h1`
  color: ${({ theme }) => theme.grey200};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.bold};
`;

export default Heading;
