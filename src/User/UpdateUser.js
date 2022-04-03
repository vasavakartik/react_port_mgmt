import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

export const UpdateUser = () => {
  var id = useParams().userId;
  console.log("id ==",id)

  const [data, setdata] = useState('');
  const [firstName, setfirstName] = useState(data.firstName);
  const [email, setemail] = useState(data.email);
  const [password, setpassword] = useState(data.password);
  const [phonenumber, setphonenumber] = useState(data.phonenumber);
  const [isActive, setisActive] = useState(data.isActive);

  const getData = () => {
    axios.get(`http://localhost:4000/users/${id}`).then((res) => {
      setdata(res.data.data);
      console.log("**", res.data.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const update = (e) => {
    //api calling...
    var updatedData = {
      firstName: firstName,
      email: email,
      password: password,
      phonenumber: phonenumber,
      isActive: isActive,
    };
    e.preventDefault();

    axios.put(`http://localhost:4000/users/${id}`, updatedData).then((res) => {
      alert("Data updated...");
    });
  };

  return (
    <div>
      <form onSubmit={update}>
        <div class="form-group">
          <label>First Name</label>
          <input
            type="text"
            class="form-control"
            defaultValue={data.firstName}
            onChange={(e) => setfirstName(e.target.value)}
          />

          <label>Email</label>
          <input
            type="text"
            class="form-control"
            defaultValue={data.email}
            onChange={(e) => setemail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="text"
            class="form-control"
            defaultValue={data.password}
            onChange={(e) => setpassword(e.target.value)}
          />

          <label>Mobail Number</label>
          <input
            type="text"
            class="form-control"
            defaultValue={data.phonenumber}
            onChange={(e) => setphonenumber(e.target.value)}
          />

          {/* Gendor */}
          
          
          <label>isActive</label>
          <input
            type="text"
            class="form-control"
            defaultValue={data.isActive}
            onChange={(e) => setisActive(e.target.value)}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};