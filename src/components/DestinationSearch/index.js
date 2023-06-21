// Write your code here

import {Component} from 'react'

import DestinationItem from '../DestinationItem'

// import './index.css'

import './index.css'

class DestinationSearch extends Component {
  state = {searchValue: ''}

  onChangeValue = event => {
    this.setState({searchValue: event.target.value})
  }

  render() {
    const {searchValue} = this.state
    const {destinationsList} = this.props

    const searchResults = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchValue.toLowerCase()),
    )

    return (
      <div className="main">
        <div className="card">
          <div className="head-card">
            <h1 className="head">Destination Search</h1>
            <div className="search-card">
              <input
                value={searchValue}
                onChange={this.onChangeValue}
                type="search"
                placeholder="search"
                className="search-input"
              />
              <img
                alt="search icon"
                src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
                className="search-icon"
              />
            </div>
          </div>

          <ul className="destination-list">
            {searchResults.map(eachDestination => (
              <DestinationItem
                searchValue={eachDestination}
                key={eachDestination.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default DestinationSearch
