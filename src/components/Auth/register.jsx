import React, { useState, useEffect } from "react";
import validator from "validator";
import { Card } from "react-bootstrap";
import axios from "axios";
import imageurl from "../../public/images/bg-registration-form-2.jpg";
import { useNavigate } from "react-router-dom";
export default function Register() {
  let navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  const [userForm, setUserForm] = useState({
    name: "",
    address: "",
    email: "",
    password: "",
    confirmPassword: "",
    nationalId: "",
    phone: "",
    gender: "",
    selectGender: false,
    profileImg: "",
    type: "",
    selectType: false,
  });
  const [userFormErr, setUserFormErr] = useState({
    nameErr: null,
    addressErr: null,
    emailErr: null,
    passwordErr: null,
    confirmPasswordErr: null,
    nationalIDErr: null,
    phoneErr: null,
    genderErr: null,
    profileImgErr: null,
    typeErr: null,
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
    // const passwordregex =
    //   "^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&*])(?=.{8,})"; //ex : Nero1234@
    const phoneRegex = "^01[0125][0-9]{8}$";
    if (e.target.id === "name") {
      setUserFormErr({
        ...userFormErr,
        name: "",
        nameErr:
          e.target.value.length === 0
            ? "The name field is required"
            : e.target.value.length < 3
            ? "Min.length is 3 characters"
            : null,
      });
    } else if (e.target.id === "address") {
      setUserFormErr({
        ...userFormErr,
        address: "",
        addressErr:
          e.target.value.length === 0 ? "This field is required" : null,
      });
    } else if (e.target.id === "nationalId") {
      setUserFormErr({
        ...userFormErr,
        nationalId: "",
        nationalIDErr:
          e.target.value.length === 0
            ? "The national id field is required"
            : e.target.value.length != 14
            ? "nationalId should be 14 numbers"
            : !validator.isNumeric(e.target.value)
            ? "national id should be only character"
            : null,
      });
    } else if (e.target.id === "phone") {
      setUserFormErr({
        ...userFormErr,
        phone: "",
        phoneErr:
          e.target.value.length === 0
            ? "The phone field is required"
            : !validator.matches(e.target.value, phoneRegex)
            ? "phone should be match Egyptian phone number "
            : null,
      });
    } else if (e.target.id === "email") {
      setUserFormErr({
        ...userFormErr,
        email: "",
        emailErr:
          e.target.value.length === 0
            ? "The email field is required"
            : !validator.isEmail(e.target.value)
            ? "please enter a valid email!"
            : null,
      });
    } else if (e.target.id === "password") {
      setUserFormErr({
        ...userFormErr,
        password: "",
        passwordErr:
          e.target.value.length === 0
            ? "The password field is required"
            : /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#\$%\*])(?=.{8,})/.test(
                e.target.value
              )
            ? null
            : `please enter a valid password 
                    - Min.length is 8 characters
                    - contains at least one lowercase 
                    - one uppercase 
                    - at least one digit 
                    - special character              
              `,
      });
    } else if (e.target.id === "confirmPassword") {
      setUserFormErr({
        ...userFormErr,
        confirmPassword: "",
        confirmPasswordErr:
          e.target.value.length === 0
            ? "The confirm Password field is required"
            : !validator.matches(e.target.value, userForm.password)
            ? `confirm password and password must be matched `
            : null,
      });
    }
  };

  const handleSetImage = (e) => {
    if (e.target.files[0]) {
      console.log(window.location.origin + e.target.files[0].name);
      setUserForm({
        ...userForm,
        [e.target.id]: e.target.files[0],
      });
      setUserFormErr({
        ...userFormErr,
        profileImg: "",
        profileImgErr: !e.target.files[0]
          ? "The profile img field is required."
          : !e.target.files[0].name.match(/\.(jpg|jpeg|png)$/)
          ? `Please select valid image.`
          : null,
      });
    } else {
      setUserFormErr({
        ...userFormErr,
        profileImgErr: "The profile img field is required.",
      });
    }
  };

  const handleGenderChange = (e) => {
    setUserForm({
      ...userForm,
      [e.target.id]: e.target.value,
      selectGender: true,
    });
    setUserFormErr({
      ...userFormErr,
      gender: "",
      genderErr: null,
    });
  };

  const handleTypeChange = (e) => {
    setUserForm({
      ...userForm,
      [e.target.id]: e.target.value,
      selectType: true,
    });
    setUserFormErr({
      ...userFormErr,
      type: "",
      typeErr: null,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", userForm.name);
    formData.append("email", userForm.email);
    formData.append("password", userForm.password);
    formData.append("confirmPassword", userForm.confirmPassword);
    formData.append("gender", userForm.gender);
    formData.append("address", userForm.address);
    formData.append("nationalId", userForm.nationalId);
    formData.append("phone", userForm.phone);
    formData.append("profileImg", userForm.profileImg);
    formData.append("type", userForm.type);

    axios
      .post("http://127.0.0.1:8000/api/register", formData)
      .then(function (response) {
        //handle success
        console.log(response);
        navigate(`/`);
      })
      .catch((error) => {
        setUserFormErr(error.response.data.errors);
        console.log(userFormErr);
      });
  };

  return (
    <div>
      <Card style={{ backgroundImage: `url(${imageurl})` }}>
        <Card.Header>
          <h4>Register Form</h4>
        </Card.Header>
        <Card.Body>
          <form onSubmit={(e) => submitForm(e)}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                name
              </label>
              <input
                type="text"
                className={`form-control ${
                  userFormErr.nameErr ? "border-danger" : ""
                }`}
                id="name"
                aria-describedby="nameHelp"
                value={userForm.name}
                onChange={(e) => handleUserFormChange(e)}
              />
              {userFormErr.nameErr && (
                <div id="nameHelp" className="form-text text-danger">
                  {userFormErr.nameErr}
                </div>
              )}
              {userFormErr.name && (
                <div id="nameHelp" className="form-text text-danger">
                  {userFormErr.name}
                </div>
              )}
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="male"
                checked={userForm.gender === "male"}
                id="gender"
                onChange={(e) => handleGenderChange(e)}
                aria-describedby="genderHelp"
              />
              <label className="form-check-label" htmlFor="gender">
                Male
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="female"
                checked={userForm.gender === "female"}
                id="gender"
                onChange={(e) => handleGenderChange(e)}
                aria-describedby="genderHelp"
              />
              <label className="form-check-label" htmlFor="gender">
                Female
              </label>
              {userFormErr.genderErr && (
                <div id="genderHelp" className="form-text text-danger">
                  {userFormErr.genderErr}
                </div>
              )}
              {userFormErr.gender && (
                <div id="genderHelp" className="form-text text-danger">
                  {userFormErr.gender}
                </div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="nationalId" className="form-label">
                nationalId
              </label>
              <input
                type="text"
                className={`form-control ${
                  userFormErr.nationalIDErr ? "border-danger" : ""
                }`}
                id="nationalId"
                aria-describedby="nationalIDHelp"
                value={userForm.nationalId}
                onChange={(e) => handleUserFormChange(e)}
              />
              {userFormErr.nationalIDErr && (
                <div id="nationalIDHelp" className="form-text text-danger">
                  {userFormErr.nationalIDErr}
                </div>
              )}
              {userFormErr.nationalId && (
                <div id="nationalIDHelp" className="form-text text-danger">
                  {userFormErr.nationalId}
                </div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                address
              </label>
              <input
                type="text"
                className={`form-control ${
                  userFormErr.addressErr ? "border-danger" : ""
                }`}
                id="address"
                aria-describedby="addressHelp"
                value={userForm.address}
                onChange={(e) => handleUserFormChange(e)}
              />
              {userFormErr.addressErr && (
                <div id="addressHelp" className="form-text text-danger">
                  {userFormErr.addressErr}
                </div>
              )}
              {userFormErr.address && (
                <div id="addressHelp" className="form-text text-danger">
                  {userFormErr.address}
                </div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone number
              </label>
              <input
                type="text"
                className={`form-control ${
                  userFormErr.phoneErr ? "border-danger" : ""
                }`}
                id="phone"
                aria-describedby="phoneHelp"
                value={userForm.phone}
                onChange={(e) => handleUserFormChange(e)}
              />
              {userFormErr.phoneErr && (
                <div id="phoneHelp" className="form-text text-danger">
                  {userFormErr.phoneErr}
                </div>
              )}
              {userFormErr.phone && (
                <div id="phoneHelp" className="form-text text-danger">
                  {userFormErr.phone}
                </div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                email
              </label>
              <input
                type="text"
                className={`form-control ${
                  userFormErr.emailErr ? "border-danger" : ""
                }`}
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
              <i className="fa-solid fa-eye-slash" onClick={togglePassword}></i>
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

            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                confirmPassword
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                aria-describedby="confirmPasswordHelp"
                value={userForm.confirmPassword}
                onChange={(e) => handleUserFormChange(e)}
              />
              {userFormErr.confirmPasswordErr && (
                <div id="confirmPasswordHelp" className="form-text text-danger">
                  {userFormErr.confirmPasswordErr}
                </div>
              )}
              {userFormErr.confirmPassword && (
                <div id="confirmPasswordHelp" className="form-text text-danger">
                  {userFormErr.confirmPassword}
                </div>
              )}
            </div>
            
            <div className="mb-3">
              <label htmlFor="profileImg" className="form-label">
                profile Image
              </label>
              <input
                className="form-control"
                type="file"
                id="profileImg"
                onChange={(e) => handleSetImage(e)}
              />
              {userFormErr.profileImgErr && (
                <div id="profileImgHelp" className="form-text text-danger">
                  {userFormErr.profileImgErr}
                </div>
              )}
              {userFormErr.profileImg && (
                <div id="profileImgHelp" className="form-text text-danger">
                  {userFormErr.profileImg}
                </div>
              )}
            </div>
            
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="type"
                value="business_founder"
                checked={userForm.type === "business_founder"}
                id="type"
                onChange={(e) => handleTypeChange(e)}
                aria-describedby="typeHelp"
              />
              <label className="form-check-label" htmlFor="type">
                Business Founder
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="type"
                value="client"
                checked={userForm.type === "client"}
                id="type"
                onChange={(e) => handleTypeChange(e)}
                aria-describedby="typeHelp"
              />
              <label className="form-check-label" htmlFor="type">
                Client
              </label>
              {userFormErr.typeErr && (
                <div id="typeHelp" className="form-text text-danger">
                  {userFormErr.typeErr}
                </div>
              )}
              {userFormErr.type && (
                <div id="typeHelp" className="form-text text-danger">
                  {userFormErr.type}
                </div>
              )}
            </div>
            
            <button className="btn btn-primary">Submit</button>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
}
