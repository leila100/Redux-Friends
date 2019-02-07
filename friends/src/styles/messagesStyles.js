import styled from "styled-components"

export const Message = styled.div`
  background-color: #8dbfb7;
  color: #fff;
  width: 100%;
  text-align: center;
  font-size: 1.6rem;
  font-family: "Roboto Slab", serif;
  ${props => props.error && ` background-color: #f76262; `}
`
