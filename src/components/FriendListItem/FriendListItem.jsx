import clsx from "clsx";

import s from './FriendListItem.module.css'

const FriendListItem = ({avatar, name, isOnline})=>{
    return (
<div className={s.item}>
  <img src= {avatar} alt="Avatar" width="48" />
  <p className={s.text}>{name}</p>
  <p className={clsx (s.status, isOnline ? s.green : s.red)}>{isOnline ? 'Online' : 'Offline'} </p>
</div>
    )
}

export default FriendListItem