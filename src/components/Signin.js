import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signin = () => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [disable, setdisable] = useState(true)
    const [pasmsg, setpasmsg] = useState('')
    const [emmsg, setemmsg] = useState('')

    const enable = () => {
        setdisable(false)

    }
    
    var navigate = useNavigate();

    const emailChangeHandler = (e) => {
        if (e.target.value.length <= 0) {
            setemmsg("please enter email")
            setdisable(true)
        }
        else {
            setemmsg('')
        }

    }

    const passwordChangeHandler = (e) => {
        if (e.target.value.length <= 0) {
            setpasmsg("Please Enter password")
            setdisable(true)
        }
        else {
            setpasmsg('')
            enable()
        }
    }
    const login = async (e) => {
       
        e.preventDefault()

        if (email == 'kartik@gmail.com' && password == 'kartik') {
            localStorage.setItem('email', email)
            localStorage.setItem('password', password)
            navigate('/Dash')
        }
        else {





            var data = {
                email: email,
                password: password
            }

          await  axios.post('http://localhost:4000/log', data).then(res => {
                // console.log(res.data.msg)
                var msg = res.data.msg

                if (res.data.msg == "Login...") {
                    navigate('/Dash')

                    alert(`${msg}`)

                    localStorage.setItem('email', email)
                    localStorage.setItem('password', password)

                }
                else {
                    toast.error(`Error`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark"
                    });
                }
            }).catch(err => {
                toast.error(`🦄${err}`, {
                    position: "top-right",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                });
            })

        }
    }
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={login}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                       onChange={(e) => { setemail(e.target.value) }} onBlur={(e) => { emailChangeHandler(e) }}
                    />
                     <small className='msg'>{emmsg}</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
                     onChange={(e) => { setpassword(e.target.value) }} onBlur={(e) => { passwordChangeHandler(e) }}   
                    />
                    <small className='msg'>{pasmsg}</small>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
                <ToastContainer
                    position="top-right"
                    autoClose={1800}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </form>
    </div>
  )
}

export default Signin