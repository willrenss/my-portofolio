import Navbar from '../components/HeaderMenu/navbar';
// import { Routes, Route } from 'react-router-dom';
// import MyBlog from './myblog';
// import MyProfile from './profile';



const Home = () => {
  return (
   <div className='content-container'>
   <Navbar/> 
    <div>      
      {/* <Routes>
        <Route path="/" element={<MyProfile/>} />
        <Route path="/myblog" element={<MyBlog/>} />
      </Routes> */}
    </div>
   </div>
  );
};

export default Home