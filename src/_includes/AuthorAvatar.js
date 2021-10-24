import avatar_img from "../assets/img/author_image/avatar.jpg";
function AuthorAvatar(){
return(
    <div className='author_avatar'>
        <figure>
            <img alt='author' src={avatar_img}/>
        </figure>
<div className='author_name'><h3>Kleber Germano</h3></div>
    </div>
)

}
export default AuthorAvatar;