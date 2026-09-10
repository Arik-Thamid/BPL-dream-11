import { AiFillDollarCircle } from 'react-icons/ai';
import Logo from '../assets/logo.png'
const Nav = ({coin}:{coin:number}) => {
    return (
       <>
       
       <nav className='container mx-auto'>
            <div className='flex justify-between items-center my-5'>
                
                <img src={Logo} alt="logo" />

                <ul className='flex gap-8 text-xl'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Fixture</a></li>
                    <li><a href="#">Teams</a></li>
                    <li><a href="#">schedules</a></li>
                </ul>

                <h2 className='font-bold text-2xl text-black flex gap-1 items-center bg-gray-100 p-2 rounded-xl shadow-lg'>{coin}<AiFillDollarCircle /></h2>
            </div>

       </nav>
       
       
       
       </>
    );
};

export default Nav;