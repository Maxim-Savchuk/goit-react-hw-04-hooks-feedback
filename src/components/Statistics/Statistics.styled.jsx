import styled from "@emotion/styled";

export const Container = styled.div`
  margin-top: 30px;
`;

export const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 30px;
`;

export const Text = styled.p`
  font-weight: 500;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
