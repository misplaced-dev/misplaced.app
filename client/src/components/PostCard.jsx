const PostCard = () => {
    
    return (
<div className="post-card">
    <img className="postImage" src="postimage.png" alt="UIDpostimage" />
        <div className="postInfo">
            <h2 className="postPrice">$50</h2>
            <h1 className="postTitle">Backpack</h1>
            <p className="postLocation">University Union</p>
        </div>
</div>
    );
    };

    export default PostCard;