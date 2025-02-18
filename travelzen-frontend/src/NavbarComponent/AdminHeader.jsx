// import { Link, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const AdminHeader = () => {
//   let navigate = useNavigate();

//   const user = JSON.parse(sessionStorage.getItem("active-admin"));
//   console.log(user);

//   const adminLogout = () => {
//     toast.success("logged out!!!", {
//       position: "top-center",
//       autoClose: 1000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//     });
//     sessionStorage.removeItem("active-admin");
//     sessionStorage.removeItem("admin-jwtToken");
//     window.location.reload(true);
//     setTimeout(() => {
//       navigate("/home");
//     }, 2000); // Redirect after 3 seconds
//   };
//   return (
//     <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
//       <li class="nav-item dropdown">
//         <a
//           class="nav-link dropdown-toggle text-color"
//           href="#"
//           id="navbarDropdown"
//           role="button"
//           data-bs-toggle="dropdown"
//           aria-expanded="false"
//         >
//           <b> Location</b>
//         </a>
//         <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
//           <li>
//             <Link
//               to="/admin/location/add"
//               class="nav-link active"
//               aria-current="page"
//             >
//               <b className="text-color"> Add Location</b>
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/admin/location/all"
//               class="nav-link active"
//               aria-current="page"
//             >
//               <b className="text-color">View Locations</b>
//             </Link>
//           </li>
//         </ul>
//       </li>

//       <li class="nav-item dropdown">
//         <a
//           class="nav-link dropdown-toggle text-color"
//           href="#"
//           id="navbarDropdown"
//           role="button"
//           data-bs-toggle="dropdown"
//           aria-expanded="false"
//         >
//           <b> Tour Guide</b>
//         </a>
//         <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
//           <li>
//             <Link
//               to="/user/tour-guide/register"
//               class="nav-link active"
//               aria-current="page"
//             >
//               <b className="text-color"> Add Tour Guide</b>
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/admin/tour-guide/all"
//               class="nav-link active"
//               aria-current="page"
//             >
//               <b className="text-color">View Tour Guides</b>
//             </Link>
//           </li>
//         </ul>
//       </li>

//       <li class="nav-item dropdown">
//         <a
//           class="nav-link dropdown-toggle text-color"
//           href="#"
//           id="navbarDropdown"
//           role="button"
//           data-bs-toggle="dropdown"
//           aria-expanded="false"
//         >
//           <b> Transport</b>
//         </a>
//         <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
//           <li>
//             <Link
//               to="/admin/transport/add"
//               class="nav-link active"
//               aria-current="page"
//             >
//               <b className="text-color"> Add Transport</b>
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/admin/transport/all"
//               class="nav-link active"
//               aria-current="page"
//             >
//               <b className="text-color">View Transports</b>
//             </Link>
//           </li>
//         </ul>
//       </li>

//       <li class="nav-item dropdown">
//         <a
//           class="nav-link dropdown-toggle text-color"
//           href="#"
//           id="navbarDropdown"
//           role="button"
//           data-bs-toggle="dropdown"
//           aria-expanded="false"
//         >
//           <b> Lodge</b>
//         </a>
//         <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
//           <li>
//             <Link
//               to="/admin/lodge/add"
//               class="nav-link active"
//               aria-current="page"
//             >
//               <b className="text-color"> Add Lodge</b>
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/admin/lodge/all"
//               class="nav-link active"
//               aria-current="page"
//             >
//               <b className="text-color">View Lodges</b>
//             </Link>
//           </li>
//         </ul>
//       </li>

//       <li class="nav-item">
//         <Link
//           to="/admin/tour/booking/all"
//           class="nav-link active"
//           aria-current="page"
//         >
//           <b className="text-color">Tour Bookings</b>
//         </Link>
//       </li>

//       <li class="nav-item dropdown">
//         <a
//           class="nav-link dropdown-toggle text-color"
//           href="#"
//           id="navbarDropdown"
//           role="button"
//           data-bs-toggle="dropdown"
//           aria-expanded="false"
//         >
//           <b> User</b>
//         </a>
//         <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
//           <li>
//             <Link
//               to="/admin/customer/all"
//               class="nav-link active"
//               aria-current="page"
//             >
//               <b className="text-color">View Customers</b>
//             </Link>
//           </li>
//           <Link
//             to="/user/admin/register"
//             class="nav-link active"
//             aria-current="page"
//           >
//             <b className="text-color">Register Admin</b>
//           </Link>
//         </ul>
//       </li>

//       <li class="nav-item">
//         <Link
//           to=""
//           class="nav-link active"
//           aria-current="page"
//           onClick={adminLogout}
//         >
//           <b className="text-color">Logout</b>
//         </Link>
//         <ToastContainer />
//       </li>
//     </ul>
//   );
// };

// export default AdminHeader;


// import { Link, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const AdminHeader = () => {
//   let navigate = useNavigate();

//   const user = JSON.parse(sessionStorage.getItem("active-admin"));
//   console.log(user);

//   const adminLogout = () => {
//     toast.success("logged out!!!", {
//       position: "top-center",
//       autoClose: 1000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//     });
//     sessionStorage.removeItem("active-admin");
//     sessionStorage.removeItem("admin-jwtToken");
//     window.location.reload(true);
//     setTimeout(() => {
//       navigate("/home");
//     }, 2000); // Redirect after 2 seconds
//   };

//   return (
//     <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
//       <li className="nav-item dropdown">
//         <a
//           className="nav-link dropdown-toggle text-color"
//           href="#"
//           id="navbarDropdown"
//           role="button"
//           data-bs-toggle="dropdown"
//           aria-expanded="false"
//         >
//           <b> Location</b>
//         </a>
//         <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//           <li>
//             <Link
//               to="/admin/location/add"
//               className="dropdown-item text-color"
//             >
//               <b>Add Location</b>
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/admin/location/all"
//               className="dropdown-item text-color"
//             >
//               <b>View Locations</b>
//             </Link>
//           </li>
//         </ul>
//       </li>

//       <li className="nav-item dropdown">
//         <a
//           className="nav-link dropdown-toggle text-color"
//           href="#"
//           id="navbarDropdown"
//           role="button"
//           data-bs-toggle="dropdown"
//           aria-expanded="false"
//         >
//           <b> Tour Guide</b>
//         </a>
//         <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//           <li>
//             <Link
//               to="/user/tour-guide/register"
//               className="dropdown-item text-color"
//             >
//               <b>Add Tour Guide</b>
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/admin/tour-guide/all"
//               className="dropdown-item text-color"
//             >
//               <b>View Tour Guides</b>
//             </Link>
//           </li>
//         </ul>
//       </li>

//       <li className="nav-item dropdown">
//         <a
//           className="nav-link dropdown-toggle text-color"
//           href="#"
//           id="navbarDropdown"
//           role="button"
//           data-bs-toggle="dropdown"
//           aria-expanded="false"
//         >
//           <b> Transport</b>
//         </a>
//         <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//           <li>
//             <Link
//               to="/admin/transport/add"
//               className="dropdown-item text-color"
//             >
//               <b>Add Transport</b>
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/admin/transport/all"
//               className="dropdown-item text-color"
//             >
//               <b>View Transports</b>
//             </Link>
//           </li>
//         </ul>
//       </li>

//       <li className="nav-item dropdown">
//         <a
//           className="nav-link dropdown-toggle text-color"
//           href="#"
//           id="navbarDropdown"
//           role="button"
//           data-bs-toggle="dropdown"
//           aria-expanded="false"
//         >
//           <b> Lodge</b>
//         </a>
//         <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//           <li>
//             <Link
//               to="/admin/lodge/add"
//               className="dropdown-item text-color"
//             >
//               <b>Add Lodge</b>
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/admin/lodge/all"
//               className="dropdown-item text-color"
//             >
//               <b>View Lodges</b>
//             </Link>
//           </li>
//         </ul>
//       </li>

//       <li className="nav-item">
//         <Link
//           to="/admin/tour/booking/all"
//           className="nav-link active"
//           aria-current="page"
//         >
//           <b className="text-color">Tour Bookings</b>
//         </Link>
//       </li>

//       <li className="nav-item dropdown">
//         <a
//           className="nav-link dropdown-toggle text-color"
//           href="#"
//           id="navbarDropdown"
//           role="button"
//           data-bs-toggle="dropdown"
//           aria-expanded="false"
//         >
//           <b> User</b>
//         </a>
//         <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//           <li>
//             <Link
//               to="/admin/customer/all"
//               className="dropdown-item text-color"
//             >
//               <b>View Customers</b>
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/user/admin/register"
//               className="dropdown-item text-color"
//             >
//               <b>Register Admin</b>
//             </Link>
//           </li>
//         </ul>
//       </li>

//       <li className="nav-item">
//         <Link
//           to=""
//           className="nav-link active"
//           aria-current="page"
//           onClick={adminLogout}
//         >
//           <b className="text-color">Logout</b>
//         </Link>
//         <ToastContainer />
//       </li>
//     </ul>
//   );
// };

// export default AdminHeader;







// import { Link, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const AdminHeader = () => {
//   let navigate = useNavigate();

//   const user = JSON.parse(sessionStorage.getItem("active-admin"));
//   console.log(user);

//   const adminLogout = () => {
//     toast.success("logged out!!!", {
//       position: "top-center",
//       autoClose: 1000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//     });
//     sessionStorage.removeItem("active-admin");
//     sessionStorage.removeItem("admin-jwtToken");
//     window.location.reload(true);
//     setTimeout(() => {
//       navigate("/home");
//     }, 2000); // Redirect after 2 seconds
//   };

//   return (
//     <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
//       <li className="nav-item dropdown">
//         <button
//           className="nav-link dropdown-toggle text-color"
//           id="navbarDropdown"
//           role="button"
//           data-bs-toggle="dropdown"
//           aria-expanded="false"
//         >
//           <b> Location</b>
//         </button>
//         <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//           <li>
//             <Link
//               to="/admin/location/add"
//               className="dropdown-item text-color"
//             >
//               <b>Add Location</b>
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/admin/location/all"
//               className="dropdown-item text-color"
//             >
//               <b>View Locations</b>
//             </Link>
//           </li>
//         </ul>
//       </li>

//       <li className="nav-item dropdown">
//         <button
//           className="nav-link dropdown-toggle text-color"
//           id="navbarDropdown"
//           role="button"
//           data-bs-toggle="dropdown"
//           aria-expanded="false"
//         >
//           <b> Tour Guide</b>
//         </button>
//         <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//           <li>
//             <Link
//               to="/user/tour-guide/register"
//               className="dropdown-item text-color"
//             >
//               <b>Add Tour Guide</b>
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/admin/tour-guide/all"
//               className="dropdown-item text-color"
//             >
//               <b>View Tour Guides</b>
//             </Link>
//           </li>
//         </ul>
//       </li>

//       <li className="nav-item dropdown">
//         <button
//           className="nav-link dropdown-toggle text-color"
//           id="navbarDropdown"
//           role="button"
//           data-bs-toggle="dropdown"
//           aria-expanded="false"
//         >
//           <b> Transport</b>
//         </button>
//         <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//           <li>
//             <Link
//               to="/admin/transport/add"
//               className="dropdown-item text-color"
//             >
//               <b>Add Transport</b>
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/admin/transport/all"
//               className="dropdown-item text-color"
//             >
//               <b>View Transports</b>
//             </Link>
//           </li>
//         </ul>
//       </li>

//       <li className="nav-item dropdown">
//         <button
//           className="nav-link dropdown-toggle text-color"
//           id="navbarDropdown"
//           role="button"
//           data-bs-toggle="dropdown"
//           aria-expanded="false"
//         >
//           <b> Lodge</b>
//         </button>
//         <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//           <li>
//             <Link
//               to="/admin/lodge/add"
//               className="dropdown-item text-color"
//             >
//               <b>Add Lodge</b>
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/admin/lodge/all"
//               className="dropdown-item text-color"
//             >
//               <b>View Lodges</b>
//             </Link>
//           </li>
//         </ul>
//       </li>

//       <li className="nav-item">
//         <Link
//           to="/admin/tour/booking/all"
//           className="nav-link active"
//           aria-current="page"
//         >
//           <b className="text-color">Tour Bookings</b>
//         </Link>
//       </li>

//       <li className="nav-item dropdown">
//         <button
//           className="nav-link dropdown-toggle text-color"
//           id="navbarDropdown"
//           role="button"
//           data-bs-toggle="dropdown"
//           aria-expanded="false"
//         >
//           <b> User</b>
//         </button>
//         <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//           <li>
//             <Link
//               to="/admin/customer/all"
//               className="dropdown-item text-color"
//             >
//               <b>View Customers</b>
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/user/admin/register"
//               className="dropdown-item text-color"
//             >
//               <b>Register Admin</b>
//             </Link>
//           </li>
//         </ul>
//       </li>

//       <li className="nav-item">
//         <button
//           className="nav-link active text-color"
//           aria-current="page"
//           onClick={adminLogout}
//         >
//           <b>Logout</b>
//         </button>
//         <ToastContainer />
//       </li>
//     </ul>
//   );
// };

// export default AdminHeader;

import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminHeader = () => {
  let navigate = useNavigate();

  const user = JSON.parse(sessionStorage.getItem("active-admin"));
  console.log(user);

  const adminLogout = () => {
    toast.success("logged out!!!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sessionStorage.removeItem("active-admin");
    sessionStorage.removeItem("admin-jwtToken");
    window.location.reload(true);
    setTimeout(() => {
      navigate("/home");
    }, 2000); // Redirect after 3 seconds
  };
  return (
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle text-color"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <b> Location</b>
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <Link
              to="/admin/location/add"
              class="nav-link active"
              aria-current="page"
            >
              <b className="text-color"> Add Location</b>
            </Link>
          </li>
          <li>
            <Link
              to="/admin/location/all"
              class="nav-link active"
              aria-current="page"
            >
              <b className="text-color">View Locations</b>
            </Link>
          </li>
        </ul>
      </li>

      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle text-color"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <b> Tour Guide</b>
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <Link
              to="/user/tour-guide/register"
              class="nav-link active"
              aria-current="page"
            >
              <b className="text-color"> Add Tour Guide</b>
            </Link>
          </li>
          <li>
            <Link
              to="/admin/tour-guide/all"
              class="nav-link active"
              aria-current="page"
            >
              <b className="text-color">View Tour Guides</b>
            </Link>
          </li>
        </ul>
      </li>

      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle text-color"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <b> Transport</b>
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <Link
              to="/admin/transport/add"
              class="nav-link active"
              aria-current="page"
            >
              <b className="text-color"> Add Transport</b>
            </Link>
          </li>
          <li>
            <Link
              to="/admin/transport/all"
              class="nav-link active"
              aria-current="page"
            >
              <b className="text-color">View Transports</b>
            </Link>
          </li>
        </ul>
      </li>

      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle text-color"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <b> Lodge</b>
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <Link
              to="/admin/lodge/add"
              class="nav-link active"
              aria-current="page"
            >
              <b className="text-color"> Add Lodge</b>
            </Link>
          </li>
          <li>
            <Link
              to="/admin/lodge/all"
              class="nav-link active"
              aria-current="page"
            >
              <b className="text-color">View Lodges</b>
            </Link>
          </li>
        </ul>
      </li>

      <li class="nav-item">
        <Link
          to="/admin/tour/booking/all"
          class="nav-link active"
          aria-current="page"
        >
          <b className="text-color">Tour Bookings</b>
        </Link>
      </li>

      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle text-color"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <b> User</b>
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <Link
              to="/admin/customer/all"
              class="nav-link active"
              aria-current="page"
            >
              <b className="text-color">View Customers</b>
            </Link>
          </li>
          <Link
            to="/user/admin/register"
            class="nav-link active"
            aria-current="page"
          >
            <b className="text-color">Register Admin</b>
          </Link>
        </ul>
      </li>

      <li class="nav-item">
        <Link
          to=""
          class="nav-link active"
          aria-current="page"
          onClick={adminLogout}
        >
          <b className="text-color">Logout</b>
        </Link>
        <ToastContainer />
      </li>
    </ul>
  );
};

export default AdminHeader;
