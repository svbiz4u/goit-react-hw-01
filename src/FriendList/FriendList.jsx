import FriendListItem from "../FriendListItem/FriendListItem"

const FriendList = ({friends}) => {
    

return (
<>
    <ul>
     {friends.map(item =>
            ( <li key={item.id}>{item.avatar}{item.name}{item.isOnline}{item.id}</li>))}
    <li>
        <FriendListItem />
    </li>
    </ul>
</>
)
}

export default FriendList


