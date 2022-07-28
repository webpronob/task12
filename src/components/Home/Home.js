import React from 'react';
import Banner from './Banner/Banner';
import Blogs from './Blogs/Blogs';
import BlogsItem from './Blogs/BlogsItem';


const Home = () => {
    return (
        <div>
           <Banner></Banner>
          <BlogsItem></BlogsItem>
          <Blogs></Blogs>
        </div>
    );
};

export default Home;