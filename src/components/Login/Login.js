import React, { useEffect } from 'react';
import img from '../../images/login_img.png';
import '../../components/Login.css'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom'
import { useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import google from '../../images/google.png'
import facebook from '../../images/facebook.png'
const Login = (props) => {
  // useEffect(() => {
  //   props.setAuthenticated(true);
  // }, []);
  const navigate = useNavigate();
    const contain ={
        img1:img
    }
    // const [
    //     signInWithEmailAndPassword,
    //     user,
    //     loading,
    //     error,
    //   ] = useSignInWithEmailAndPassword(auth);
    const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);
      const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    };
    const handleSocial =() =>{
      signInWithGoogle()
  }
  const handleFacebook =() =>{
    signInWithFacebook()
  }
   useEffect(() =>{
    if(user){
      // navigate('/')
      console.log(user)
     
      
    }
   },[])
    return (
        <div>
            <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog res-modal modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header bg-header">
          <p class="modal-title ms-5" id="exampleModalLabel">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p> 
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div className="row px-3 ">
            <div className="col-md-7 mt-5">
            <h3 className='my-2 fw-bold'>Sign In</h3>
           <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-group">
        	<input {...register("email")} type="email" class="form-control form-container" name="email" placeholder="Email" required="required"/>
        </div>
        <div class="form-group">
        <input {...register("password")} type="password" class="form-control form-container" name="password" placeholder="Password" required="required"/>
        </div>
        <button  data-bs-dismiss="modal" aria-label="Close" type="submit" class="btn mt-2 submit-btn res-submit-btn btn-primary mb-2 mt-3 w-100 btn-lg btn-md-block">Sign in</button>
        <span data-bs-dismiss="modal" aria-label="Close" data-bs-toggle="modal" data-bs-target="#exampleModal" className='res-signup'>or, Create Account</span>
           </form>

        <div className="mt-2">
        <button onClick={handleSocial} class="btn btn-lg btn-block btn-primary google-btn w-100 mb-2" 
          type="submit"><img className='google-img' src={google} alt="" /> Sign in with google</button>
        <button onClick={handleFacebook} class="btn btn-lg btn-block btn-primary mb-2 google-btn w-100"
          type="submit"><img className='google-img' src={facebook} alt="" />Sign in with facebook</button>
          <h5 className='text-center pb-4 mt-2'>Forgot Password?</h5>
        </div>

            </div>
            <div className="col-md-5 d-flex flex-column mt-5">
            
                <p className='text-end sign-message'>Don’t have an account yet? <span data-bs-dismiss="modal" aria-label="Close" data-bs-toggle="modal" data-bs-target="#exampleModal" className='inpText'>Create new for free!</span></p>
                <img className='loginImg' src={contain.img1} alt="" />
                {/* <p className='text-start'>By signing up, you agree to our Terms & conditions, Privacy policy</p> */}
            </div>
          </div>

        </div>
        {/* <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div> */}
      </div>
    </div>
  </div>
        </div>
    );
};

export default Login;