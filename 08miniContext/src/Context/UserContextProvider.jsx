import React from "react";

import userContext from "./userContext";

const usercontextprovider = ({ children }) => {
   const [user, setUser] = React.useState(null)
    return(
        <userContext.Provider>
            {children}
        <userContext.Provider />
    )
}

            export default  usercontextprovider  