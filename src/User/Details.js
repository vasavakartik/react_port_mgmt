import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";


export const Details = () => {
    const [userList, setuserList] = useState([]);
    

    const getData = () => {
        
      axios.get("http://localhost:4000/users").then((res) => {
        console.log("rolename",res.data.data[0].role.roleName);
        console.log("isActive",res.data.data[0].isActive);
  
        setuserList(res.data.data);
      });
    };
  
  
    const DeleteData = (_id) => {
      if(window.confirm('Are you sure'))
      {
        axios.delete(`http://localhost:4000/users/${_id}`).then((res) => {
          alert(res.status);
        });
      }
    };
  
  
    useEffect(() => {
      getData();
    }, []);
    return (
        <div >
            <div className="col-md-10">
      <div className="content-wrapper card-body table-responsive p-0">
            <h3 className="row-1 d-inline-flex" >     User Details</h3>
            <Link to='/adduser' className="btn btn-info float-right">Add user</Link>
        <table className="  table-hover table table-striped ">
          <thead className="m-0 text-dark">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
              <th scope="col">Mobile No.</th>
              <th scope="col">isActive</th>
              <th scope="col">Action</th>
    
              
    
            </tr>
          </thead>
          <tbody>
            {userList.map((user) => {
              return (
                <tr>
                  <th scope="row">{user._id}</th>
                  <td>{user.firstName}</td>
                  <td>{user.email}</td>
                  <td>{user.role.roleName}</td>
                  <td>{user.phonenumber}</td>
                  <td>
                    {
                      user.isActive? "True":"False"
                    }
                  </td>
                  
          
    
          
                  
                  {/* <td>{user.isActive}</td> */}
                  <td>
                  <button onClick={()=> DeleteData(user._id)} className="btn btn-danger">DELETE</button>
    
                    </td>            
                </tr>
              );
            })}
          </tbody>
        </table>
        </div>
      </div>
      </div>
    );
    };