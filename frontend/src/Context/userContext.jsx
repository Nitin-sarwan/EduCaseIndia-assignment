import React ,{createContext, useState} from 'react'

export const UserDataContext= createContext();


const userContextProvider = ({children}) => {
  const [user,setUser] = useState(null);
  return (
    <div>
        <UserDataContext.Provider value={{user,setUser}}>
            {children}
        </UserDataContext.Provider>
      
    </div>
  )
}

export default userContextProvider
