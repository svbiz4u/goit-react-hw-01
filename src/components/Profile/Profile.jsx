
import s from './Profile.module.css'

const Profile = ({username, tag, location, image, stats : {followers, views, likes} })=> {

return (
   <div className={s.container}>
        <div className={s.cardwrapper}>
            <img 
            src={image} className={s.img}
            alt= "User avatar"
            />
            <p> {username}</p>   
            <p> @{tag}</p>
            <p>{location}</p>
        </div>

        <ul className={s.list}>
            <li className={s.item}>
            <span>Followers</span>
            <span>{followers}</span>
            </li>
            <li className={s.item}>
            <span>Views</span>
            <span>{views}</span>
            </li>
            <li className={s.item}>
            <span>Likes</span>
            <span>{likes}</span>
        </li>
        </ul>
    </div>
)
}

export default Profile;