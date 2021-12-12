import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: '',
      inititalList: props.suggestionsList,
    }
  }

  searchFunction = event => {
    this.setState({searchInput: event.target.value})
  }

  inputFunction = value => {
    // console.log('input Function')
    // console.log(value)
    this.setState({searchInput: value})
  }

  render() {
    const {inititalList, searchInput} = this.state
    console.log('vikas')
    console.log(searchInput)
    const FilteredList = inititalList.filter(eachList =>
      eachList.suggestion.toLowerCase().includes(searchInput),
    )
    return (
      <div className="mainContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="googleImage"
        />
        <div className="Container">
          <div className="inputContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="searchIcon"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="inputElement"
              onChange={this.searchFunction}
              value={searchInput}
            />
          </div>

          <ul>
            {FilteredList.map(eachItem => (
              <SuggestionItem
                listItem={eachItem}
                key={eachItem.id}
                clickFunction2={this.inputFunction}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
