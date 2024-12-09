import React from "react";

function App() {
  const users = [
  {name: "Asan", lastName: "Usonov", age: 25},
  {name: "John", lastName: "Jones", age: 28},
  {name: "Jason", lastName:"Statham", age: 35},
  ]
  
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

export default App;