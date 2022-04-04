import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export const UpdateRole = () => {
    var id = useParams().id;
    console.log("Id--",id);

    const [data, setdata] = useState({})
    const [roleName, setroleName] = useState(data.roleName)

    const getData=()=>{
        axios.get(`http://localhost:4000/roles`).then((res)=>{
            setdata(res.data.data);
            console.log("--",res.data.data);
        })
    }

    useEffect(() => {
        getData();
    }, [])

    const update =(e)=>{
        var updatedData ={
           
            roleName:roleName

        };
        console.log(updatedData);
        e.preventDefault();

        axios.put(`http://localhost:4000/roles`,updatedData).then((res)=>{
            console.log(res.status)
            alert('Data Updated.....');
        });
    };
    
  return (
    <div>
    <form onSubmit={update}>
      <div class="form-group">
        <label>Role Name</label>
        <input
          type="text"
          class="form-control"
          defaultValue={data.roleName}
          onChange={(e) => setroleName(e.target.value)}
        /></div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
        </form>
        </div>
  )
}
