import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
  margin-left: 10px;
  min-width: 80vw;
`

export const CountryName = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 26px;
  font-weight: normal;
  margin: 5px;
`

export const VisitedText = styled.p`
  color: #94a3b8;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: normal;
  margin: 5px;
  margin-right: 20px;
`

export const VisitButton = styled.button`
  background-color: ${props => (props.bgColor ? 'transparent' : '#3b82f6')};
  color: ${props => (props.color ? '#334155' : '#ffffff')};
  font-size: 24px;
  font-family: 'Roboto';
  height: 45px;
  min-width: 120px;
  max-width: 150px;
  border-radius: 10px;
  border: 0px;
  margin: 5px;
  outline: none;
  cursor: pointer;
`
