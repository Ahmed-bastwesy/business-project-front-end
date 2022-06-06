import React, { useState , useEffect ,}  from "react";
import validator from "validator";
import Swal from 'sweetalert2';
import { Card} from "react-bootstrap";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUser } from "../../storage/action/actions";
import NavBar from "../layout/navbar";
// import env from "react-dotenv";


export default function Login() {
  const user =useSelector((state)=>state.user.user);
  const token = useSelector((state)=>state.token.token);
  const dispatch = useDispatch();
  useDispatch
  const [errors,setErrors ]=useState([])
  const [userForm, setUserForm] = useState({
    email: "",
    password: "",
  });
  const [userFormErr, setUserFormErr] = useState({
    emailErr: "",
    passwordErr: "",
  });
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleUserFormChange = (e) => {
    setUserForm({
      ...userForm,
        [e.target.id]: e.target.value,
    });

    if (e.target.id === "email") {
      setUserFormErr({
        ...userFormErr,
        email:"",
        emailErr:
          e.target.value.length === 0
            ? "The email field is required."
            : !validator.isEmail(e.target.value)
            ? "please enter a valid email!"
            : null,
      });
    } else if (e.target.id === "password") {
      setUserFormErr({
        ...userFormErr,
        password:"",
        passwordErr:
          e.target.value.length === 0
            ? "The password field is required."
            : null,
      });
    } 
  };
  

  const submitForm = (e) => {
    e.preventDefault();
      const formData = new FormData();
      formData.append('email',userForm.email)
      formData.append('password',userForm.password)
      axios.post(`${import.meta.env.VITE_SOME_API_URL}/api/login`,formData)
      .then(function (response) {
        //handle success
        console.log(response.data.user);
      
        dispatch(setUser(response.data.user))
        dispatch(setToken(response.data.token))
      }).catch(error => {
        if(error.response.data.errors){
            setUserFormErr(error.response.data.errors);
        }
        if(error.response.status == 401){
            
            Swal.fire({
                icon: "error",
                title: "user doesn't exist",
                showConfirmButton: false,
                timer: 2500,
              });
            //   <Redirect to='/login'  />
        }
       
      });
};

  return (
      <div>
        <NavBar/>
        <Card>
          <Card.Header>
            <h4>Login Form</h4>
            
          </Card.Header>
          <Card.Body>
            <form onSubmit={(e) => submitForm(e)}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  email
                </label>
                <input
                  type="text"
                  className={`form-control ${
                      userFormErr.emailErr ? "border-danger" : "" }`}
                  id="email"
                  aria-describedby="emailHelp"
                  value={userForm.email}
                  onChange={(e) => handleUserFormChange(e)}
                />
                {userFormErr.emailErr && (
                  <div id="emailHelp" className="form-text text-danger">
                    {userFormErr.emailErr}
                  </div>
                )}
                {userFormErr.email && (
                  <div id="emailHelp" className="form-text text-danger">
                    {userFormErr.email}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  password
                </label>
                <input
                  type={passwordShown ? "text" : "password"}
                  className="form-control"
                  id="password"
                  aria-describedby="passwordHelp"
                  value={userForm.password}
                  onChange={(e) => handleUserFormChange(e)}
                />{" "}
                <i
                  className="fa-solid fa-eye-slash"
                  onClick={togglePassword}
                ></i>
                {userFormErr.passwordErr && (
                  <div id="passwordHelp" className="form-text text-danger">
                    {userFormErr.passwordErr}
                  </div>
                )}
                {userFormErr.password && (
                  <div id="passwordHelp" className="form-text text-danger">
                    {userFormErr.password}
                  </div>
                )}
              </div>
              <button  className="btn btn-primary">
                Login
              </button> 
            </form>
          </Card.Body>
        </Card>
      </div>
  );
}



