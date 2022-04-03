import React from 'react'
import {useState ,useEffect} from 'react'
import axios from 'axios'


export const AddUser = () => {
const [email, setemail] = useState('')
const [password, setpassword] = useState('')
const [firstName, setfirstName] = useState('')
const [lastName, setlastName] = useState('')
const [address, setaddress] = useState('')
const [Phonenumber, setPhonenumber] = useState('')
const [roleList, setroleList] = useState([])

var Data ={
    email: email,
    password: password,
    firstName:firstName,
    lastName:lastName,
    address:address,
    Phonenumber:Phonenumber
  }
  const submit = (e)=>{
    e.preventDefault()
    axios.post('http://localhost:4000/users',Data).then(res =>{
        console.log(res.status)
        console.log(res.data)
    })
}

  const getData = ()=>{
    axios.get("http://localhost:4000/roles").then((res) => {
      console.log(res.data.data);
      setroleList(res.data.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);
    return (
        <div>
            <form onSubmit={submit}>
                <div class="form-group">
                    <label>email</label>
                    <input
                        type="text"
                        class="form-control"
                        onChange={(e) => setemail(e.target.value)}
                    />
                    <label>password</label>
                    <input
                        type="text"
                        class="form-control"
                        onChange={(e) => setpassword(e.target.value)}
                    />
                    <label>firstName</label>
                    <input
                        type="text"
                        class="form-control"
                        onChange={(e) => setfirstName(e.target.value)}
                    />
                     <label>lastName</label>
                    <input
                        type="text"
                        class="form-control"
                        onChange={(e) => setlastName(e.target.value)}
                    />
                     <label>address</label>
                    <input
                        type="text"
                        class="form-control"
                        onChange={(e) => setaddress(e.target.value)}
                    />
                     <label>Phonenumber</label>
                    <input
                        type="text"
                        class="form-control"
                        onChange={(e) => setPhonenumber(e.target.value)}
                    />
                     <label>role</label>
                     <select className="form-control select2 select2-hidden-accessible" data-select2-id="1" tabindex="-1" aria-hidden="true">
                  {roleList.map((role)=>{
                    return(
                    <option selected="selected" data-select2-id="3">{role.roleName}</option>
                    
                    )})}
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">
        Submit
      </button>
            </form>
        </div>
    )
}
