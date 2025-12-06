import "./UserItem.css"

const UserItem = ({ username, photoURL }) => {

    return (
        <div id="userItemRootDiv">
            <div id="userItemInnerDiv">
                <img className="profile-icon-small" src={photoURL}></img>
                <p id="title">{username}</p>
            </div>

            <p id="rightChevron">&#8250;</p>
        </div>
    );
};

export default UserItem;