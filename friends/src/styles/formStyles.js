import styled from "styled-components"

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: auto;
  input {
    outline: none;
    border: none;
    border-bottom: 1px solid #8dbfb7;
    border-left: 1px solid #8dbfb7;
    padding: 10px;
    width: 50%;
    margin: 5px auto;

    :hover {
      border-bottom: 3px solid #8dbfb7;
      border-left: 3px solid #8dbfb7;
      color: #8dbfb7;
      background-color: #fff;
    }
  }
`

export const Button = styled.button`
  width: 20%;
  background-color: #8dbfb7;
  color: #fff;
  outline: none;
  margin: 10px auto;
  padding: 5px;
  font-size: 1.7rem;
  border-radius: 5px;

  :hover {
    border: 3px solid #8dbfb7;
    color: #8dbfb7;
    background-color: #fff;
  }

  :disabled {
    color: #ccc;
    cursor: not-allowed;
    ${props => props.removeIfDisabled && ` display: none; `}
  }
`
