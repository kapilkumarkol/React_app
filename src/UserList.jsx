import React, { useEffect, useState } from "react";
import axios from "axios";
const UserList = () => {
  const [user, setUser] = useState([]);
  const res = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(({ data }) => {
      console.log(data);
      setUser(data);
    });
  };

  useEffect(() => {
    res();
  }, []);
const deleteHandle = (event)=>{
    setUser(user.filter((value,index)=>{
        return index !=event.target.value;
    }))
}
  return (
    <>
      <div className="col-xl-12">
        <div className="card" style={{ width: "1250px" }}>
          <div className="card-body">
            <h5 className="card-title">Table with stripped rows</h5>

            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">UserName</th>
                  <th scope="col">Email</th>
                  <th scope="col">Address</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {user.map((value, index) => {
                  return (
                    <tr key={index}>
                      <td >{value.id}</td>
                      <td>{value.name}</td>
                      <td>{value.username}</td>
                      <td>{value.email}</td>
                      <td>{value.address.city}</td>
                      <td><button onClick={deleteHandle} id={index}>Delete</button></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserList;
