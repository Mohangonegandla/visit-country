import {
  VisitedCountriesListItem,
  Image,
  DetailsContainer,
  Name,
  RemoveButton,
} from './styledComponents'

const VisitedCountries = props => {
  const {visitedCountryDetails, onClickRemoveButton} = props
  const {id, name, imageUrl} = visitedCountryDetails

  const onClickButton = () => {
    onClickRemoveButton(id)
  }

  return (
    <VisitedCountriesListItem>
      <Image src={imageUrl} alt="thumbnail" />
      <DetailsContainer>
        <Name>{name}</Name>
        <RemoveButton type="button" onClick={onClickButton}>
          Remove
        </RemoveButton>
      </DetailsContainer>
    </VisitedCountriesListItem>
  )
}

export default VisitedCountries
