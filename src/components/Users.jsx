import React from 'react'

export const Users = () => {
  return (
    <div className="App">
      {users.map((user)=>(
        <h1>
          {user.name},{user.lastName},{user.age}
        </h1>
      )
    )}
    </div>
  );
}
