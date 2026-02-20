import React, {useContext} from "react";
import userContext from "../Context/userContext";

function Profile() {
    const {user} = useContext(userContext)

    if (!user) return <div>no userfound</div>

    return <div>welcome {user.username}</div>
}

export default Profile