import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UserRegister = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
    phoneNo: "",
    street: "",
    city: "",
    pincode: "",
    role: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (document.URL.indexOf("customer") !== -1) {
      user.role = "Customer";
    } else if (document.URL.indexOf("tour-guide") !== -1) {
      user.role = "Tour Guide";
    }
  }, []);

  const handleUserInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    // Basic validations
    if (!user.firstName) newErrors.firstName = "First name is required";
    if (!user.lastName) newErrors.lastName = "Last name is required";
    if (!user.emailId) {
      newErrors.emailId = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(user.emailId)) {
      newErrors.emailId = "Email format is invalid";
    }
    if (!user.password) newErrors.password = "Password is required";
    else if (user.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (!user.phoneNo) newErrors.phoneNo = "Phone number is required";
    else if (!/^\d{10}$/.test(user.phoneNo)) newErrors.phoneNo = "Phone number should be 10 digits";
    if (!user.street) newErrors.street = "Street is required";
    if (!user.city) newErrors.city = "City is required";
    if (!user.pincode) newErrors.pincode = "Pincode is required";
    else if (!/^\d{6}$/.test(user.pincode)) newErrors.pincode = "Pincode should be 6 digits";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const saveUser = (e) => {
    e.preventDefault();

    if (!validate()) {
      return; // Don't proceed if validation fails
    }

    fetch("http://localhost:8080/api/user/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((result) => {
        result.json().then((res) => {
          if (res.success) {
            toast.success(res.responseMessage, {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });

            setTimeout(() => {
              navigate("/user/login");
            }, 1000);
          } else {
            toast.error(res.responseMessage, {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setTimeout(() => {
              window.location.reload(true);
            }, 1000);
          }
        });
      })
      .catch((error) => {
        console.error(error);
        toast.error("It seems server is down", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          window.location.reload(true);
        }, 1000);
      });
  };

  return (
    <div>
      <div className="mt-2 d-flex aligns-items-center justify-content-center ms-2 me-2 mb-2">
        <div
          className="form-card border-color text-color"
          style={{ width: "50rem" }}
        >
          <div className="container-fluid">
            <div
              className="card-header bg-color custom-bg-text mt-2 d-flex justify-content-center align-items-center"
              style={{
                borderRadius: "1em",
                height: "45px",
              }}
            >
              <h5 className="card-title">Register</h5>
            </div>
            <div className="card-body mt-3">
              <form className="row g-3" onSubmit={saveUser}>
                <div className="col-md-6 mb-3 text-color">
                  <label htmlFor="firstName" className="form-label">
                    <b>First Name</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    onChange={handleUserInput}
                    value={user.firstName}
                  />
                  {errors.firstName && <p style={{ color: "red" }}>{errors.firstName}</p>}
                </div>

                <div className="col-md-6 mb-3 text-color">
                  <label htmlFor="lastName" className="form-label">
                    <b>Last Name</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    onChange={handleUserInput}
                    value={user.lastName}
                  />
                  {errors.lastName && <p style={{ color: "red" }}>{errors.lastName}</p>}
                </div>

                <div className="col-md-6 mb-3 text-color">
                  <label htmlFor="emailId" className="form-label">
                    <b>Email Id</b>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailId"
                    name="emailId"
                    onChange={handleUserInput}
                    value={user.emailId}
                  />
                  {errors.emailId && <p style={{ color: "red" }}>{errors.emailId}</p>}
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="password" className="form-label">
                    <b>Password</b>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    onChange={handleUserInput}
                    value={user.password}
                  />
                  {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="phoneNo" className="form-label">
                    <b>Contact No</b>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="phoneNo"
                    name="phoneNo"
                    onChange={handleUserInput}
                    value={user.phoneNo}
                  />
                  {errors.phoneNo && <p style={{ color: "red" }}>{errors.phoneNo}</p>}
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="street" className="form-label">
                    <b>Street</b>
                  </label>
                  <textarea
                    className="form-control"
                    id="street"
                    name="street"
                    rows="3"
                    onChange={handleUserInput}
                    value={user.street}
                  />
                  {errors.street && <p style={{ color: "red" }}>{errors.street}</p>}
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="city" className="form-label">
                    <b>City</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    name="city"
                    onChange={handleUserInput}
                    value={user.city}
                  />
                  {errors.city && <p style={{ color: "red" }}>{errors.city}</p>}
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="pincode" className="form-label">
                    <b>Pincode</b>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="pincode"
                    name="pincode"
                    onChange={handleUserInput}
                    value={user.pincode}
                  />
                  {errors.pincode && <p style={{ color: "red" }}>{errors.pincode}</p>}
                </div>

                <div className="d-flex aligns-items-center justify-content-center">
                  <input
                    type="submit"
                    className="btn bg-color custom-bg-text"
                    value="Register User"
                  />
                </div>
                <ToastContainer />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
