import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #161624;
  height: 100vh;
  width: 100vw;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: 500;
  margin: 5px;
`

export const NoVisitedText = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 40px;
  font-weight: 600;
  margin: 5px;
  align-self: center;
`

export const CountriesListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  width: 90%;
  margin: 10px;
  margin-left: 30px;
  max-height: 40vh;
  overflow-y: scroll;
`

export const VisitedCountriesList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  border: 0px;
  padding: 10px;
  width: 90%;
  margin: 5px;
  margin-left: 30px;
  max-height: 50vh;
  overflow-y: scroll;
`
