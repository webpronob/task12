import React, { useState } from "react";

const Blog = ({ items }) => {
  const [active,setActive] =useState(false)
  return (
    <div class="col res-col">
      <div class="card res-card me-5">
        {
          items.img?
          <img src={items.img} class="card-img-top " alt="..." />
          :""
        }
        <div class="card-body res-body px-2">
          <h5 class="card-title  fw-bold my-3">{items.category ? items.category : ""}</h5>
          <div className="title-section my-2 d-flex justify-content-between align-items-center">
            <div className="">
            <h4 class="card-title fw-bold pe-3">{items.title}</h4>
            {
                items.view_site &&<div className="d-flex mt-2 gap-3">
                    <h5 className="about-text">
                    <svg className="mb-1 me-1" width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.8333 2.49992H13V0.833252H11.3333V2.49992H4.66667V0.833252H3V2.49992H2.16667C1.24167 2.49992 0.508333 3.24992 0.508333 4.16659L0.5 15.8333C0.5 16.7499 1.24167 17.4999 2.16667 17.4999H13.8333C14.75 17.4999 15.5 16.7499 15.5 15.8333V4.16659C15.5 3.24992 14.75 2.49992 13.8333 2.49992ZM13.8333 15.8333H2.16667V6.66659H13.8333V15.8333ZM3.83333 8.33325H8V12.4999H3.83333V8.33325Z" fill="black"/>
</svg>
{
  items.company?items.company:"Fri, 12 Oct, 2018"
}

                    </h5>
                    <h5 className="about-text">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.99996 1.66675C6.77496 1.66675 4.16663 4.27508 4.16663 7.50008C4.16663 11.8751 9.99996 18.3334 9.99996 18.3334C9.99996 18.3334 15.8333 11.8751 15.8333 7.50008C15.8333 4.27508 13.225 1.66675 9.99996 1.66675ZM5.83329 7.50008C5.83329 5.20008 7.69996 3.33342 9.99996 3.33342C12.3 3.33342 14.1666 5.20008 14.1666 7.50008C14.1666 9.90008 11.7666 13.4918 9.99996 15.7334C8.26663 13.5084 5.83329 9.87508 5.83329 7.50008Z" fill="black"/>
<path d="M9.99996 9.58341C11.1506 9.58341 12.0833 8.65067 12.0833 7.50008C12.0833 6.34949 11.1506 5.41675 9.99996 5.41675C8.84937 5.41675 7.91663 6.34949 7.91663 7.50008C7.91663 8.65067 8.84937 9.58341 9.99996 9.58341Z" fill="black"/>
</svg>

Ahmedabad, India

                    </h5>
                </div>
            }
            </div>
            <div className="wrapper">
          
            <svg
            className={active ? "dot-icon":""}
              width={active?"45":"25"}
              height="50"
              viewBox="0 0 20 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6667 2.99996C14.6667 4.28329 15.7167 5.33329 17 5.33329C18.2834 5.33329 19.3334 4.28329 19.3334 2.99996C19.3334 1.71663 18.2834 0.666626 17 0.666626C15.7167 0.666626 14.6667 1.71663 14.6667 2.99996ZM12.3334 2.99996C12.3334 1.71663 11.2834 0.666626 10 0.666626C8.71671 0.666626 7.66671 1.71662 7.66671 2.99996C7.66671 4.28329 8.71671 5.33329 10 5.33329C11.2834 5.33329 12.3334 4.28329 12.3334 2.99996ZM5.33337 2.99996C5.33337 1.71662 4.28337 0.666625 3.00004 0.666625C1.71671 0.666625 0.666708 1.71662 0.666708 2.99996C0.666708 4.28329 1.71671 5.33329 3.00004 5.33329C4.28337 5.33329 5.33337 4.28329 5.33337 2.99996Z"
                fill="black"
              />
              
            </svg>
            <details data-popover="down">
    <summary onClick={() =>setActive(!active)}>..</summary>
    <div>
      <p className="lh-1">Edit</p>
      <p>Report</p>
      <p>Option 3</p>
    </div>
  </details>
            </div>
          </div>
          {
            items.view_site ?
            <div class="d-grid mx-2 gap-2">
  {
    items.btn_color?<button class="btn btn-outline-dark t-btn py-3" type="button">Visit Website</button>:
    <button class="btn btn-outline-dark d-btn py-3" type="button">Visit Website</button>
  }
  {/* <button class="btn btn-primary" type="button">Button</button> */}
</div>
            : <p class="card-text">{items.description}</p>
          }
         
          <div className="profile-section mt-2 d-flex justify-content-between align-items-center">
            <div className="profile-avatar d-flex align-items-center gap-2">
              <img src={items.profile_img} alt="Avatar" class="avatar" />
              <h4 className="profile-text">{items.profile_name}</h4>
            </div>
            <div className="d-flex gap-4 mt-3">
              <div className="d-flex mt-2 ">
              <svg className="mb-1 me-2 " width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 9C2.0475 5.7075 5.25 3.375 9 3.375C12.75 3.375 15.9525 5.7075 17.25 9C15.9525 12.2925 12.75 14.625 9 14.625C5.25 14.625 2.0475 12.2925 0.75 9ZM15.615 9C14.3775 6.4725 11.8425 4.875 9 4.875C6.1575 4.875 3.6225 6.4725 2.385 9C3.6225 11.5275 6.1575 13.125 9 13.125C11.8425 13.125 14.3775 11.5275 15.615 9ZM9 7.125C10.035 7.125 10.875 7.965 10.875 9C10.875 10.035 10.035 10.875 9 10.875C7.965 10.875 7.125 10.035 7.125 9C7.125 7.965 7.965 7.125 9 7.125ZM5.625 9C5.625 7.14 7.14 5.625 9 5.625C10.86 5.625 12.375 7.14 12.375 9C12.375 10.86 10.86 12.375 9 12.375C7.14 12.375 5.625 10.86 5.625 9Z" fill="#525252"/>
</svg>

                <p className="res-view">1.4k views</p>
              </div>
              <p className="share-icon">
              <svg className="me-1 " width="15" height="15" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5 12.06C12.93 12.06 12.42 12.285 12.03 12.6375L6.6825 9.525C6.72 9.3525 6.75 9.18 6.75 9C6.75 8.82 6.72 8.6475 6.6825 8.475L11.97 5.3925C12.375 5.7675 12.9075 6 13.5 6C14.745 6 15.75 4.995 15.75 3.75C15.75 2.505 14.745 1.5 13.5 1.5C12.255 1.5 11.25 2.505 11.25 3.75C11.25 3.93 11.28 4.1025 11.3175 4.275L6.03 7.3575C5.625 6.9825 5.0925 6.75 4.5 6.75C3.255 6.75 2.25 7.755 2.25 9C2.25 10.245 3.255 11.25 4.5 11.25C5.0925 11.25 5.625 11.0175 6.03 10.6425L11.37 13.7625C11.3325 13.92 11.31 14.085 11.31 14.25C11.31 15.4575 12.2925 16.44 13.5 16.44C14.7075 16.44 15.69 15.4575 15.69 14.25C15.69 13.0425 14.7075 12.06 13.5 12.06Z" fill="#2D2D2D"/>
</svg>
<span>Share</span>
              </p>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
