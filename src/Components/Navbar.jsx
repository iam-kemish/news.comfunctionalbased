import  { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'><span>N</span>avbar</h1>
      <ul className='hidden md:flex space-x-9'>
      
      <li>
        <Link to="/business">Business</Link>
      </li>
      <li>
        <Link to="/entertainment">Entertainment</Link>
      </li>
      <li>
        <Link to="/health">Health</Link>
      </li>
      <li>
        <Link to="/science">Science</Link>
      </li>
      <li>
        <Link to="/sports">Sports</Link>
      </li>
      <li>
        <Link to="/technology">Technology</Link>
      </li>
      </ul>
     <div onClick={handleNav} className='block md:hidden'>
  {nav ? <AiOutlineClose size={20} color="#fff"/> : <AiOutlineMenu size={20} color="#fff" />}
</div>

     
      <div className='block md:hidden'>
  <div className="flex flex-col justify-between h-full">
    <div onClick={handleNav}>
      {nav ? <AiOutlineClose size={20} color="#fff"/> : <AiOutlineMenu size={20} color="#fff" />}
    </div>
    <ul>
      <li>
        <Link to="/business">Business</Link>
      </li>
      <li>
        <Link to="/entertainment">Entertainment</Link>
      </li>
      <li>
        <Link to="/health">Health</Link>
      </li>
      <li>
        <Link to="/science">Science</Link>
      </li>
      <li>
        <Link to="/sports">Sports</Link>
      </li>
      <li>
        <Link to="/technology">Technology</Link>
      </li>
    </ul>
  </div>
</div>

    </div>
  );
};

export default Navbar;