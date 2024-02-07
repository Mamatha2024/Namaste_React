
import {LOGO_URL} from '../utils/constants';
const Header=()=>{
    return(
        <div className='header'>
            <div className='logo-container'> 
                <img className='logo'
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUo5DfHU-qL49wfX9YfQHfCfkZ57nrJBVVGg&usqp=CAU"/>
             </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Log out</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;


