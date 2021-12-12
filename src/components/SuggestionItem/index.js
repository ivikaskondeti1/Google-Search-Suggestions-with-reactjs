import {Component} from 'react'
import './index.css'

class SuggestionItem extends Component {
  render() {
    const {listItem, clickFunction2} = this.props
    const {suggestion} = listItem
    const clickFunction = () => {
      console.log('button Clicked')
      console.log(suggestion)

      clickFunction2(suggestion)
    }
    return (
      <li className="listContainer">
        <p className="paragraph">{listItem.suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
          onClick={clickFunction}
        />
      </li>
    )
  }
}
export default SuggestionItem
