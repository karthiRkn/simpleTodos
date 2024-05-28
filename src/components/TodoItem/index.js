import './index.css'

const UserProfileItem = props => {
  const {userDetails, deleteUser} = props
  const {title, id} = userDetails
  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li className="user-card-container">
      <div className="user-details-container">
        <p className="user-name"> {title} </p>
        <button type="button" className="delete-buttn" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default UserProfileItem
