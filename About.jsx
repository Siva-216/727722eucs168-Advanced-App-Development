import React, { useEffect, useState } from 'react'
import '../Assets/About.css'

import '@fortawesome/fontawesome-free/css/all.min.css';
function About() {
    const [event,setevent] = useState(0);
    const [eveplan,seteveplan] = useState(0);
    const [country,setcountry] = useState(0);
    const [cust,setcust] = useState(0);
  
    useEffect(()=>{
  
      setTimeout(() => {
        if(event!==1000)
        setevent((prev)=>prev+1);
        if(eveplan!== 500)
        seteveplan((prev)=>prev+1);
        if(country!== 250)
        setcountry((prev)=>prev+1);
        if(cust!== 15)
        setcust((prev)=>prev+1);
      }, 1);
  
    },[event,eveplan,country,cust]);
  return (
    <div className='AboutTotal'>
      <div className='Abouttitle'>
          <h1>About Us</h1>
      <div className='Aboutspace'></div>
      <div className='AboutText'>
      <p>Welcome to <strong>S2V</strong>, the premier event organizer booking portal dedicated to transforming your event planning experience. Whether you're hosting a wedding, corporate event, birthday party, concert, or any special occasion, we connect you with the best event organizers in the industry to ensure your event is a stunning success.</p>
      </div>
      </div>
      <div className='Homeclientcount'>
            <table className='Hometab'>
              <tr>
                <td><div className='Hometab1'>
                <i className="fas fa-calendar-alt"></i>

                  <p>{event}+</p>
                  <p>Events</p></div></td>
                <td></td>
                <td><div className='Hometab1'>
                <i className="fas fa-calendar-check"></i>
                  <p>{eveplan}+</p>
                  <p>Event Planners</p></div></td>
                <td></td>
                <td><div className='Hometab1'><i className="fas fa-globe"></i>
                  <p>{country}+</p>
                  <p>Cities</p></div></td>
                <td></td>
                <td><div className='Hometab1'>
                <i className="fas fa-users"></i>
                  <p>{cust}k+</p>
                  <p>Attendees</p></div></td>
                <td></td>
              </tr>
            </table>
    </div>
    <div className='Aboutmis'>
      <div className='Topic'>
      <h3><u>Our Mission</u></h3></div>
      <p >Our mission is to simplify and streamline the event planning process by offering a seamless, user-friendly platform that connects you with top-notch event organizers. We are committed to helping you create memorable events that leave a lasting impression.</p>
    </div>
    <div className='Aboutmis'>
      <div className='Topic'>
      <h3><u>What We Offer</u></h3></div>
      <ul>
          <li><strong>Comprehensive Listings:</strong> Our extensive database features a wide range of event organizers specializing in various types of events. From intimate gatherings to grand celebrations, you’ll find the perfect match for your needs.</li>
          <li><strong>Verified Professionals:</strong> We meticulously vet all our event organizers to ensure they meet our high standards of professionalism, reliability, and creativity.</li>
          <li><strong>Easy Booking:</strong> Our intuitive platform allows you to browse, compare, and book event organizers with ease. You can view profiles, read reviews, and check availability, all in one place.</li>
          <li><strong>Personalized Service:</strong> We understand that every event is unique. Our platform provides personalized recommendations based on your preferences and requirements, making your search efficient and tailored.</li>
          <li><strong>Customer Support:</strong> Our dedicated customer support team is here to assist you at every step, ensuring a smooth and hassle-free experience.</li>
      </ul>
      </div>
      <div className='Aboutmis'>
      <div className='Topic'>
      <h3><u>Why Choose Us?</u></h3></div>
        <ul>
            <li><strong>Expertise:</strong> With years of experience in the event industry, we know what it takes to create unforgettable events. Our team is passionate about helping you bring your vision to life.</li>
            <li><strong>Quality Assurance:</strong> We only work with the best. Our rigorous selection process guarantees that you receive top-tier service from reputable event organizers.</li>
            <li><strong>User-Friendly Experience:</strong> Our platform is designed with you in mind. Easy navigation, detailed profiles, and comprehensive search filters make finding the right event organizer a breeze.</li>
            <li><strong>Community:</strong> Join a community of satisfied clients who have successfully planned their events with us. Read testimonials, share your experiences, and become part of our growing network.</li>
        </ul>
        </div>
          <div className='ourteam'>
        <h1>Our Team Memebers</h1></div>
        <div className='Aboutus'>
        <div className='Aboutwe'>
          <div className='Aboutprof'></div>
          <div className='Aboutname'>
            <h2>SIVA</h2>
            <p>Founder</p>
            <i class="fa-brands fa-github" ></i><i class="fa-brands fa-instagram"></i>
            </div>
        </div>
        <div className='Aboutwe'>
          <div className='Aboutprof'></div>
          <div className='Aboutname'>
            <h2>SIVAKUMAR</h2>
            <p>Founder</p>
            <i class="fa-brands fa-github" ></i><i class="fa-brands fa-instagram"></i>
            </div>
        </div>
        <div className='Aboutwe'>
          <div className='Aboutprof'></div>
          <div className='Aboutname'>
            <h2>VEERA</h2>
            <p>Founder</p>
            <i class="fa-brands fa-github" ></i><i class="fa-brands fa-instagram"></i>
            </div>
        </div>
        </div>
      {/* <div className='AboutText'>
      <h1>About Us</h1>
      </div>
      
      <div className='Aboutmis'>
      <p><span>Ready to plan your next event? Explore our platform and discover the perfect event organizer to make your occasion extraordinary. At [Your Company Name], we’re here to turn your event dreams into reality.</span></p>
      <button>Get Started Today</button>
        </div>
        <div className='Aboutline'></div>
        <div className='Aboutus'>
        <h1>Our Team Memebers</h1>
        <div className='Aboutwe'>
          <div className='Aboutprof'></div>
          <div className='Aboutname'>
            <h2>UserName</h2>
            </div>
        </div>
        <div className='Aboutwe'>
          <div className='Aboutprof'></div>
          <div className='Aboutname'>
            <h2>UserName</h2>
            </div>
        </div>
        <div className='Aboutwe'>
          <div className='Aboutprof'></div>
          <div className='Aboutname'>
            <h2>UserName</h2>
            </div>
        </div>
      </div> */}
       </div>
  )
}

export default About