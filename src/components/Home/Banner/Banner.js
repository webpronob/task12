import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/Firebase.init';
import './Banner.css'
const Banner = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
    return (
        <div className="p-md-5 hero-section text-center bg-image rounded-3" >
      <div class="mask container">

      <div className="d-none px-md-2 res-section  justify-content-between align-items-center">
            <div className="">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="white"/>
</svg>

            </div>
            <div className="">
                {
                  user ?<button onClick ={logout} data-bs-toggle="modal" data-bs-target="#exampleModal" className='btn mb-1 join-btn' type='btn'>
                  <span className=''>Leave group</span>
                  </button>
                  :
                  <button data-bs-toggle="modal" data-bs-target="#exampleModal" className='btn mb-1 join-btn' type='btn'>
                <span className=''>Join Group</span>
                </button>
                }
            </div>
        </div>
        <div class="d-flex banner-contain  justify-content-center align-items-center h-100">
          <div class="text-white hero-text  pt-5 container">
            <h3 class="mb-t banner-text mt-5">Computer Engineering</h3>
            <p className="pb-3">142,765 Computer Engineers follow this</p>
            {/* <p onClick ={logout}>out</p>  */}
          </div>
        </div>
      </div>
    </div>
    );
};

export default Banner;
