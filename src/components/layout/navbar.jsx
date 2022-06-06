import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeToken, removeUser } from "../../storage/action/actions";
export default function NavBar() {

    const user = useSelector((state)=>state.user.user)
    const token =useSelector((state)=>state.token.token);
    const dispatch = useDispatch();
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const bodyParameters = {
       key: "value"
    };
    const clickLogout = () => {
    axios.post(`${import.meta.env.VITE_SOME_API_URL}/api/logout`,bodyParameters,config)
    .then(function (response) {
        dispatch(removeToken())
        dispatch(removeUser())
    }).catch(error => {
        console.log(error)
    })
    }
    return (
      <div>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#"><img src="/images/MarkupTag-white-logo.png" alt="Logo" className="img-fluid" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About Us</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    View More
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Web Development</a></li>
                                    <li><a className="dropdown-item" href="#">Web Designing</a></li>
                                    <li><a className="dropdown-item" href="#">Android Development</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact Us</a>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <div className="dropdown">
                                <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                    Our Products
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li><a className="dropdown-item" href="#">Product One</a></li>
                                    <li><a className="dropdown-item" href="#">Product Two</a></li>
                                    <li><a className="dropdown-item" href="#">Product Three</a></li>
                                </ul>
                            </div>

                            {token ? 
                            (
                                    <ul className="navbar-nav ms-5 me-0 mb-2 mb-lg-0 mx-0" >
                                        <div className="dropdown">
                                            <li className="nav-item dropdown">
                                                <a className="navbar-brand nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <span><img src={`${import.meta.env.VITE_SOME_API_URL}/${user.profileImg}`} className="rounded-circle text-center" alt="userphoto" style={{width:50 , height:50}} aria-expanded="false"/></span> {user.name}
                                                </a>
                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                                    <li><button className="btn btn-light ms-3" onClick={clickLogout}>Logout</button></li>
                                                </ul>
                                            </li>
                                        </div>
                                    </ul>
                            )
                            :(
                                <div>
                                <Link to="/Login" className="btn btn-outline-primary  ms-3">Login</Link>
                                <Link to="/Register" className="btn btn-outline-primary  ms-3">SignUp</Link>
                                </div>
                            )}
                            
                        </div>
                    </div>
                </div>
            </nav>
      </div>
    );
  }