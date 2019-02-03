

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  background: transparent;
  font-style: italic;
  font-size: 16px;
  width: 140px;
  padding-bottom: 8px;
  :focus {
    border: none;
  }
`

const StyledButton = styled.button`
  border: none;
  font-size: 30px;
  color: black;
  background-color: #FEA680;
  font-style: italic;
  width: 140px;
  float: left;
  margin-top: 10px;
  padding: 10px;
  margin-right: 40px;
  :hover {
    cursor: pointer;
  }
`

export default { StyledInput, StyledButton }
