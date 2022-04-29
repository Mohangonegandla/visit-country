import styled from 'styled-components'

export const VisitedCountriesListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 5px;
  max-width: 350px;
  max-height: 300px;
`

export const Image = styled.img`
  height: 70%;
  width: 100%;
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 20%;
  width: 100%;
`

export const Name = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: normal;
  margin: 5px;
`

export const RemoveButton = styled.button`
  background-color: transparent;
  color: #ffffff;
  font-size: 20px;
  font-family: 'Roboto';
  height: 35px;
  width: 100px;
  border-radius: 10px;
  border: 1px solid #94a3b8;
  margin: 5px;
  outline: none;
  cursor: pointer;
`
