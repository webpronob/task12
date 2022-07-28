import React, { useState } from "react";
import img1 from "../../../images/img3.png";
import img2 from "../../../images/img1.png";
import img3 from "../../../images/img2.png";
import profile_img1 from "../../../images/profile_img1.png";
import profile_img2 from "../../../images/profile_img2.png";
import profile_img3 from "../../../images/profile_img3.png";
import profile_img4 from "../../../images/profile_img4.png";
import Blog from "./Blog";
import follow_img1 from '../../../images/follow_img1.png'
import follow_img2 from '../../../images/follow_img2.png'
import follow_img3 from '../../../images/follow_img3.png'
import follow_img4 from '../../../images/follow_img4.png'
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/Firebase.init";
function Blogs() {
  const [user, loading, error] = useAuthState(auth)
  const [active,setActive] =useState(false)
  const follow =[
    {
      follow_img:follow_img1,
      name:"Leisure"
    },
    {
      follow_img:follow_img2,
      name:"Activism"
    },
    {
      follow_img:follow_img3,
      name:"MBA"
    },
    {
      follow_img:follow_img4,
      name:"Philosophy"
    }
  ]
  const blogs = [
    {
      id: 1,
      title: "What if famous brands had regular fonts? Meet RegulaBrands!",
      description: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
      category: "✍️ Article",
      img: img1,
      profile_img: profile_img1,
      profile_name: "Sarthak Kamra",
    },
    {
      id: 2,
      title: "Finance & Investment Elite Social Mixer @Lujiazui",
      description: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
      category: "🗓️ Meetup",
      img: img3,
      profile_img: profile_img3,
      profile_name: "Ronal Jones",
    },
    {
      id: 3,
      title: "Tax Benefits for Investment under National Pension Scheme launched by Government",
      description: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
      category: "🔬️ Education",
      img: img2,
      profile_img: profile_img2,
      profile_name: "Sarah West",
      time: " Fri, 12 Oct, 2018",
      location: "Ahmedabad, India",
      view_site: true,
    },
    {
      id: 4,
      title: "Software Developer",
      description: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
      category: "💼️ Job",
      profile_img: profile_img4,
      profile_name: "Joseph Gray",
      // time: 
      company:"Innovaccer Analytics Private Ltd.",
      location: "Noida, India",
      view_site: true,
      btn_color:true,
      
    }
  ];
  const changeBtn =(e)  =>{
    e.target.className="btn active-btn"
    e.target.innerText ="Followed"
    // setActive(!active)
  }
  return (
    <div>
      <div className="container-box">
        <div className="row">
          <div className="col-md-8 res-blogs">
            <div className="row row-cols-1 me-0 row-cols-md-1 gap-3 ">
              {blogs.map((items) => (
                <Blog items={items}></Blog>
              ))}
            </div>
          </div>
          <div className="col-md-4 other-section px-5 mt-3">



{
  user ?
  <div className="pb-3">
<div className="d-flex align-items-center justify-content-between pb-2">
  <div className="d-flex">
  <svg className="mt-1" width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 1.5C6.0975 1.5 3.75 3.8475 3.75 6.75C3.75 10.6875 9 16.5 9 16.5C9 16.5 14.25 10.6875 14.25 6.75C14.25 3.8475 11.9025 1.5 9 1.5ZM5.25 6.75C5.25 4.68 6.93 3 9 3C11.07 3 12.75 4.68 12.75 6.75C12.75 8.91 10.59 12.1425 9 14.16C7.44 12.1575 5.25 8.8875 5.25 6.75Z" fill="black"/>
<path d="M9 8.625C10.0355 8.625 10.875 7.78553 10.875 6.75C10.875 5.71447 10.0355 4.875 9 4.875C7.96447 4.875 7.125 5.71447 7.125 6.75C7.125 7.78553 7.96447 8.625 9 8.625Z" fill="black"/>
</svg>
<span>Enter your location</span>
  </div>
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.8333 5.34163L14.6583 4.16663L10 8.82496L5.34167 4.16663L4.16667 5.34163L8.82501 9.99996L4.16667 14.6583L5.34167 15.8333L10 11.175L14.6583 15.8333L15.8333 14.6583L11.175 9.99996L15.8333 5.34163Z" fill="black"/>
</svg>



</div>
<hr />
</div>


:
<div className="">
<div className="section  d-flex justify-content-between ">
              <div className="d-flex">
                <svg
                  className="mt-1"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 1.5C6.0975 1.5 3.75 3.8475 3.75 6.75C3.75 10.6875 9 16.5 9 16.5C9 16.5 14.25 10.6875 14.25 6.75C14.25 3.8475 11.9025 1.5 9 1.5ZM5.25 6.75C5.25 4.68 6.93 3 9 3C11.07 3 12.75 4.68 12.75 6.75C12.75 8.91 10.59 12.1425 9 14.16C7.44 12.1575 5.25 8.8875 5.25 6.75Z"
                    fill="black" />
                  <path
                    d="M9 8.625C10.0355 8.625 10.875 7.78553 10.875 6.75C10.875 5.71447 10.0355 4.875 9 4.875C7.96447 4.875 7.125 5.71447 7.125 6.75C7.125 7.78553 7.96447 8.625 9 8.625Z"
                    fill="black" />
                </svg>
                <h5>Noida, India</h5>
              </div>

              <div className="">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 14.375V17.5H5.625L14.8417 8.28334L11.7167 5.15834L2.5 14.375ZM17.2583 5.86667C17.5833 5.54167 17.5833 5.01667 17.2583 4.69167L15.3083 2.74167C14.9833 2.41667 14.4583 2.41667 14.1333 2.74167L12.6083 4.26667L15.7333 7.39167L17.2583 5.86667Z"
                    fill="black" />
                </svg>
              </div>
            </div>
            <hr />  
</div>
}

            








            <div className="d-flex">
              <svg className="me-2 mt-1"
                width="20"
                height="20"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.5">
                  <path
                    d="M7.33337 10H8.66671V11.3334H7.33337V10ZM7.33337 4.66671H8.66671V8.66671H7.33337V4.66671ZM7.99337 1.33337C4.31337 1.33337 1.33337 4.32004 1.33337 8.00004C1.33337 11.68 4.31337 14.6667 7.99337 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8.00004C14.6667 4.32004 11.68 1.33337 7.99337 1.33337ZM8.00004 13.3334C5.05337 13.3334 2.66671 10.9467 2.66671 8.00004C2.66671 5.05337 5.05337 2.66671 8.00004 2.66671C10.9467 2.66671 13.3334 5.05337 13.3334 8.00004C13.3334 10.9467 10.9467 13.3334 8.00004 13.3334Z"
                    fill="black" />
                </g>
              </svg>
              <p className='location-text'>Your location will help us serve better and extend a personalised experience.</p>
            </div>
            <div className="">
              

              {
                user ?
                
                <div className="mt-3 mb-3 follow-section">
                  <div className="title">
                <svg className="me-2 mb-1" width="22" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.3" d="M15.75 9V7.5H9L10.005 3.495L6.75 6.75V14.25H13.5L15.75 9Z" fill="black" />
                  <path d="M6.75 15.75H13.5C14.1225 15.75 14.655 15.375 14.88 14.835L17.145 9.5475C17.2125 9.375 17.25 9.195 17.25 9V7.5C17.25 6.675 16.575 6 15.75 6H11.0175L11.73 2.5725L11.7525 2.3325C11.7525 2.025 11.625 1.74 11.4225 1.5375L10.6275 0.75L5.685 5.6925C5.415 5.9625 5.25 6.3375 5.25 6.75V14.25C5.25 15.075 5.925 15.75 6.75 15.75ZM6.75 6.75L10.005 3.495L9 7.5H15.75V9L13.5 14.25H6.75V6.75ZM0.75 6.75H3.75V15.75H0.75V6.75Z" fill="black" />
                </svg>

                <span className="sidebarText ">REcommended Groups</span>
              </div>
              {
                follow.map(i =>{
                  return <div className="d-flex  align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-3 my-2">
                    <img src={i.follow_img} alt="" />
                    <h5>{i.name}</h5>
                  </div>
                  <div className="">
                  {/* follow-btn */}
                    <button onClick={(e) =>changeBtn(e)} className="btn follow-btn">Follow</button>
                  </div>
                </div>
                })
                
              }
              </div>
              :""
              }

            </div>



          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;


