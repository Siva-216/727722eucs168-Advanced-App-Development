import React, { useContext, useState } from 'react'
import '../Assets/Navbar.css'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Events from './Events';
import Login from './Login';
import { useNavigate } from 'react-router-dom';
import Pricing from './Pricing';
import { Context } from './Globaldata';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Profile from './Profile';
function Navbar() {
    const [currentState,SetCurrentState] = useState('Home');
    const {loggedIn,LogOut} = useContext(Context);
    const [profshow,setprofshow] = useState(false);
    const navi = useNavigate();
    const HomeSpace = (event) => {
        event.preventDefault();
        SetCurrentState('Home');try{
            console.log('Home');
        }
        catch(err){
            console.error(err);
        }
        
    }
    const AboutSpace = (event) => {
        event.preventDefault();
        SetCurrentState('About');try{
            console.log('About');
        }
        catch(err){
            console.error(err);
        }
    }
    const ContactSpace = (event) => {
        event.preventDefault();
        SetCurrentState('Contact');
        try{
            console.log('Contact');
        }
        catch(err){
            console.error(err);
        }
    }
    const ProfileSpace = () => {
        navi('/Login');try{
            console.log('Login');
        }
        catch(err){
            console.error(err);
        }
    }
    const EventSpace = (event) =>{
        event.preventDefault();
        SetCurrentState('Event');try{
            console.log('Event');
        }
        catch(err){
            console.error(err);
        }
    }
    const PricingSpace = (event)=>{
        event.preventDefault();
        SetCurrentState('Pricing');try{
            console.log('Pricing');
        }
        catch(err){
            console.error(err);
        }
    }
    const ProfShowdetails = ()=>{
        if(profshow === true)
            setprofshow(false);
        else 
            setprofshow(true);
        console.log(profshow);try{
            console.log('ProfShowDetails');
        }
        catch(err){
            console.error(err);
        }
    }
    const ProfileSpaces = (event)=>{
        event.preventDefault();
        SetCurrentState('Profile');
        setprofshow(false);try{
            console.log('Profile');
        }
        catch(err){
            console.error(err);
        }
    }
    const DashBoardSpace = (event)=>{
        event.preventDefault();
        SetCurrentState('Dashboard');
        setprofshow(false);try{
            console.log('Dashboard');
        }
        catch(err){
            console.error(err);
        }
    }
    const Logoutspace = ()=>{
        LogOut();
        setprofshow(false);try{
            console.log('Contact');
        }
        catch(err){
            console.error(err);
        }
    }
  return (
    <div className='navtotal'>
        <div className='lif'></div>
        <div className='navbar'>
        <div className='buttonsnav'>
            <button onClick={HomeSpace} style={{color:(currentState === "Home")?"blue":"",fontWeight:(currentState === "Home")?"bold":""}}>Home</button>
            <button onClick={EventSpace} style={{color:(currentState === "Event")?"blue":"",fontWeight:(currentState === "Event")?"bold":""}}>Events</button>    
            <button onClick={PricingSpace} style={{color:(currentState === "Pricing")?"blue":"",fontWeight:(currentState === "Pricing")?"bold":""}}>Pricing</button>    
            <button onClick={AboutSpace} style={{color:(currentState === "About")?"blue":"",fontWeight:(currentState === "About")?"bold":""}}>About</button>
            <button onClick={ContactSpace} style={{color:(currentState === "Contact")?"blue":"",fontWeight:(currentState === "Contact")?"bold":""}}>Contact</button>    
            {(loggedIn)?<i class="fa fa-user"  value={profshow} aria-hidden="true" onClick={ProfShowdetails} style={{color:(currentState === "Profile")?"blue":""}}></i>:<button onClick={ProfileSpace}>Login</button>}    
        </div>
        <div className='navlogo'>
            <h1>S2V</h1>
            </div>
        </div>
        {profshow === true ?(
            <div className='profshowshowcase'>
                <i class="fa-solid fa-xmark" onClick={ProfShowdetails}></i>
                <h3 onClick={ProfileSpaces}>Profile</h3>
                {/* <h3 onClick={DashBoardSpace}>Dashboard</h3> */}
                <h3 onClick={Logoutspace}>Logout</h3>
            </div>
        ):(null)}
        <div className='navhead'>
            {(currentState === 'Home')?
                <Home></Home>
            :null}
            {(currentState === 'About')?<About></About>:null}
            {(currentState === 'Contact')?<Contact></Contact>:null}
            {(currentState === 'Event')?<Events></Events>:null}
            {(currentState === 'Pricing')?<Pricing></Pricing>:null}
            {(currentState === 'Profile')?<Profile></Profile>:null}
        </div>
        {/* <div className='FooterSpace'>
            
        </div> */}
        {currentState === "Profile" ? (<div></div>):(
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-about">
                    <h2>About Us</h2>
                    <p>Our Event Organizer Booking platform connects you with the best event planners and vendors to make your special occasions unforgettable. Whether it’s a wedding, birthday party, or any other event, we ensure seamless planning and execution.</p>
                </div>
                <div className="footer-links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/events">Events</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                        <li><a href="/faq">FAQ</a></li>
                    </ul>
                </div>
                <div className="footer-social">
                    <h2>Follow Us</h2>
                    <div className="social-icons">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-x-twitter"></i></a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="footer-contact">
                    <h2>Contact Us</h2>
                    <p>Email: info@eventorganizer.com</p>
                    <p>Phone: +123 456 7890</p>
                    <p>Address: 123 Event Street, Party City, Country</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Event Organizer Booking. All rights reserved.</p>
            </div>
        </footer>)}
    </div>
  )
}

export default Navbar