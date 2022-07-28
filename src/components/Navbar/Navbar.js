import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";
import img1 from '../../images/profile_img1.png'
import "./Navbar.css";
const Navbar = () => {
  const [user, loading, error] = useAuthState(auth)
  // console.log(user.providerData[0].displayName)
  console.log(user?.photoURL)
  return (
    <div className="bg-white">
      <div className="navbar1  ">
        <div className="logo">
          <span className="greenText">ATG.</span>
          <span>W</span>
          <svg className="mb-2"
            width="28"
            height="28"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.3007 22.2V12.8205L11.9123 18.45H11.9452V24C9.93993 23.8981 7.99522 23.278 6.3007 22.2ZM13.6149 18.4845L19.2924 12.7935V22.1655C17.6003 23.2755 15.6368 23.9006 13.6149 23.973V18.4845ZM19.2924 18.2835V12.786H24.7706C24.6415 14.734 24.0334 16.6199 23.0005 18.276L19.2924 18.2835ZM2.59263 18.2835C1.55855 16.6252 0.950455 14.7366 0.822525 12.786H6.3007V18.276L2.59263 18.2835ZM9.30732 12.0165C9.30851 11.3294 9.51319 10.658 9.8955 10.0873C10.2778 9.5165 10.8206 9.07197 11.4553 8.80984C12.0899 8.54771 12.788 8.47973 13.4612 8.61451C14.1345 8.74929 14.7527 9.08078 15.2378 9.56707C15.7229 10.0534 16.053 10.6727 16.1865 11.3467C16.3201 12.0207 16.2509 12.7192 15.9879 13.3539C15.7249 13.9886 15.2798 14.5311 14.7088 14.9127C14.1379 15.2943 13.4667 15.498 12.7801 15.498C12.3236 15.4976 11.8717 15.4072 11.4502 15.2321C11.0286 15.0569 10.6457 14.8003 10.3232 14.477C10.0008 14.1538 9.74506 13.7701 9.57075 13.3479C9.39644 12.9257 9.30693 12.4733 9.30732 12.0165ZM19.1605 11.1465L13.6149 5.5965V0C15.6266 0.127176 17.5711 0.773109 19.2595 1.875V5.64L19.2759 5.6565H22.972C23.9983 7.30233 24.6051 9.17515 24.7391 11.1105L24.7706 11.1465H19.1605ZM0.789551 11.1465L0.830019 11.1C0.980743 9.1712 1.58635 7.30566 2.59712 5.6565H6.28421L6.3007 5.64V1.875C7.98907 0.773109 9.9336 0.127176 11.9452 0V5.5905L6.39962 11.1405L0.789551 11.1465Z"
              fill="url(#paint0_linear_1_813)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_813"
                x1="0.789551"
                y1="10.464"
                x2="12.7907"
                y2="23.9906"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#00A854" />
                <stop offset="1" stop-color="#004D25" />
              </linearGradient>
            </defs>
          </svg>

          <span className="defultText">RLD</span>
        </div>
        <div className="searchbar d-md-flex d-sm-none">
      <div class=" ">
        <div class="search">
        <svg className="ms-4" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.2083 10.8333H11.4842L11.2275 10.5858C12.1258 9.54083 12.6667 8.18417 12.6667 6.70833C12.6667 3.4175 9.99917 0.75 6.70833 0.75C3.4175 0.75 0.75 3.4175 0.75 6.70833C0.75 9.99917 3.4175 12.6667 6.70833 12.6667C8.18417 12.6667 9.54083 12.1258 10.5858 11.2275L10.8333 11.4842V12.2083L15.4167 16.7825L16.7825 15.4167L12.2083 10.8333ZM6.70833 10.8333C4.42583 10.8333 2.58333 8.99083 2.58333 6.70833C2.58333 4.42583 4.42583 2.58333 6.70833 2.58333C8.99083 2.58333 10.8333 4.42583 10.8333 6.70833C10.8333 8.99083 8.99083 10.8333 6.70833 10.8333Z" fill="#7A7A7A"/>
</svg>
          <input class="search_input" type="text" name="" placeholder="Search for your favorite groups in ATG"/>
      

        </div>
    </div>

         </div>
         <div className="res-flex">
         <svg className="me-2" width="20" height="20" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="-0.00012207" width="10" height="10" fill="#868E96"/>
</svg>

<svg className="me-2" width="20" height="20" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 9.99988C7.76142 9.99988 10 7.7613 10 4.99988C10 2.23845 7.76142 -0.00012207 5 -0.00012207C2.23858 -0.00012207 0 2.23845 0 4.99988C0 7.7613 2.23858 9.99988 5 9.99988Z" fill="#868E96"/>
</svg>

<svg className="me-2" width="20" height="20" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 -0.00012207H12L6 9.99988L0 -0.00012207Z" fill="#868E96"/>
</svg>


         </div>
         {
          user ?
          // user.providerData[0].displayName
          <div className="d-flex account justify-content-between align-items-center">
            <img  src={user?user.photoURL:img1} alt="Avatar" class="avatar w-25 rounded-circle me-3"></img>
           <h5>{user?user.providerData[0].displayName:"Siddharth Goyal"}</h5> 
           <svg className="ms-3" width="14" height="7" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.416672 0.166687L5 4.75002L9.58334 0.166687H0.416672Z" fill="black"/>
</svg>

          </div>
          :
          <div className="login">
          <p data-bs-toggle="modal" data-bs-target="#exampleModal" className="loginText account-text">Create account.<span className="me-3 account-text-blue">It’s free!</span><svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0L5 5L10 0H0Z" fill="#2E2E2E"/>
</svg>
</p>

      </div> 
         }
      </div>
    </div>
  );
};

export default Navbar;
