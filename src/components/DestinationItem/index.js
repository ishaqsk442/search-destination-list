// Write your code here
import './index.css'

const DestinationItem = props => {
  const {searchValue} = props

  const {imgUrl, name} = searchValue

  return (
    <li className="destination-list-cont">
      <img src={imgUrl} alt={name} className="dest-img" />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem
