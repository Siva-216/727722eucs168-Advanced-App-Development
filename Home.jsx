import React, { useEffect, useState } from 'react'
import '../Assets/Home.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom';
function Home() {
  const [event,setevent] = useState(0);
  const [eveplan,seteveplan] = useState(0);
  const [country,setcountry] = useState(0);
  const [cust,setcust] = useState(0);
  const navi = useNavigate();

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
  const HandleAboutpage = () => {
    navi('/about');
  }
  return (
    <div className='HomeCenter'>
        <div className='HomeImg'>
          <p>C E L E B R A T E <span>I N </span>S T Y L E</p>
          <div className='Booknow'>Book Now</div>
        </div>
        <div className='Homeherosection'>
          <h1>Expert Wedding & Event Planning Services Across All Over TamilNadu – From KanyaKumari  to Chennai and all the Best Venues</h1>
        </div>
        <div className="HomeContent1">
              <p>UNPARALLELED, STRESS-FREE</p>
              <h1>EVENT PLANNING & DESIGN </h1>
              <p>The Infinity experience is unlike any other. Our full-service event planning and design team will guide you every step of the way, ensuring a stress-free experience from start to finish.</p>
              <p>With us, customization is guaranteed. You'll be paired with an Infinity Event Team who will collaborate with you to bring your vision to life. We will team up with some of the best vendors in Nashville and take care of all the details like meeting scheduling, delivery dates, payments, day-of setup, and more.</p>
              <p>When it’s showtime, our staff will work tirelessly to guarantee your event is effortless and unforgettable.</p>
              <button onClick={HandleAboutpage}>Find Out More</button>
        </div>
    </div>
  )
}

export default Home