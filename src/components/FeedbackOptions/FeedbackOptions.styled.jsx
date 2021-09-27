import styled from "@emotion/styled";

export const Container = styled.div`
  margin-top: 40px;
  margin-left: 20px;
  display: flex;
`;

export const Button = styled.button`
  background-color: transparent;
  border-radius: 4px;
  border: none;
  font-size: 18px;
  padding: 5px 10px;
  cursor: pointer;
  text-transform: capitalize;
  font-weight: 600;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 4px rgba(0, 0, 0, 0.16), 0px 1px 1px rgba(0, 0, 0, 0.12);
  &:not(:last-child) {
    margin-right: 15px;
  }
`;