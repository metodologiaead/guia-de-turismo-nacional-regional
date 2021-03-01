import styled from 'styled-components'

const Button = styled.button`
  font-size: 1rem;
  line-height: 1;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: 0;
  cursor: pointer;
`

const ButtonPrimary = styled(Button)`
  background-color: ${(props) => props.theme.buttonPrimary};
  color: ${(props) => props.theme.textSecondary};
`

const ButtonGhost = styled(Button)`
  display: flex;
  align-items: center;
  outline: none;

  background-color: transparent;
  color: ${(props) => props.theme.buttonPrimary};
  font-size: 1.8rem;

  span {
    font-size: 0.8rem;
    margin-right: 5px;
  }
`

export { ButtonPrimary, ButtonGhost }
