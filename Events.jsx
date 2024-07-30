import React from 'react';
import '../Assets/Events.css';
import Wedding from '../Assets/Images/Traditional Bangalore Wedding With The Bride In A Gorgeous Kanjeevaram.jpeg';
// import HouseWarming from '../Assets/Images/navratri-interior-decoration.jpg'
import BirthdayParty from '../Assets/Images/happy-birthday-celebrations.jpg'
import Ear from '../Assets/Images/Ear_Piercing_-_Painful_yet_Fruitful.jpg'
import HouseWarm from '../Assets/Images/house.jpg';
import Bangle from '../Assets/Images/bangle5.webp'
function Events() {
    const events = [
        { eve_id: 1, eve_name: "Wedding", eve_pic: Wedding, description: "Celebrate your special day with elegance and style by booking a wedding event through our platform. Our event booking application connects you with top-notch wedding planners and venues, ensuring every detail of your big day is perfect. From traditional ceremonies to modern receptions, our experienced organizers will help you create a memorable and personalized wedding experience. Enjoy seamless planning, stunning decorations, exquisite catering, and exceptional entertainment. With our user-friendly interface, you can browse profiles, read reviews, and choose the best vendors to make your wedding unforgettable. Start planning your dream wedding with us today!" },
        { eve_id: 2, eve_name: "House Warming", eve_pic: HouseWarm, description: "Celebrate the joy of a new beginning with a memorable house warming event. Our event booking platform offers an array of services to make your housewarming ceremony truly special. From traditional rituals and blessings to modern celebrations, we provide experienced event planners who cater to your specific needs. Enjoy seamless coordination of decorations, catering, and entertainment, ensuring a warm and welcoming atmosphere for your guests. Whether it’s an intimate gathering or a grand celebration, our professionals will handle every detail, allowing you to focus on enjoying your new home and creating lasting memories with your loved ones." },
        { eve_id: 3, eve_name: "Birthday Party", eve_pic: BirthdayParty, description: "A birthday party is a joyful celebration marking another year of life. Our event booking application simplifies planning by connecting you with top-notch organizers specializing in birthday festivities. Whether it's a child's magical fairy tale party, a teenager's milestone bash, or an adult's sophisticated soiree, we offer tailored solutions to make your event memorable. Choose from a variety of themes, venues, and services, including decorations, entertainment, catering, and photography. Our trusted organizers ensure every detail is perfect, allowing you to relax and enjoy the celebration with your loved ones. Book now for an unforgettable birthday experience!" },
        { eve_id: 4, eve_name: "Ear Piercing", eve_pic: Ear, description: "Ear piercing is a significant and cherished tradition, especially in many cultures around the world. It is a rite of passage that signifies growth and maturity. Our event booking application ensures a seamless experience for organizing an ear piercing ceremony. From selecting a suitable venue to finding skilled professionals, we provide a range of options to customize your event. Whether it’s a simple, intimate gathering or a grand celebration, our platform connects you with trusted vendors to ensure the occasion is memorable and special. Let us help you celebrate this beautiful tradition with ease and elegance." },
        { eve_id: 5, eve_name: "Baby Shower", eve_pic: Bangle, description: "Celebrate the upcoming arrival of your little one with a beautiful and memorable baby shower. Our event booking platform connects you with experienced organizers who specialize in creating delightful baby showers tailored to your preferences. From charming decorations and themed games to delectable food and personalized favors, every detail is meticulously planned to ensure a joyous and stress-free celebration. Whether you envision an intimate gathering or a grand affair, our professional planners will bring your vision to life, making your baby shower a cherished occasion for you and your loved ones." }
    ];

    return (
        <div className='Eventtotal'>
            <h1>Explore Our Events</h1>
            {events.map(event => (
                event.eve_id % 2 === 0 ? (
                    <div className='Eventshow' key={event.eve_id}>
                        <img src={event.eve_pic} alt="" width="430" height="500" />
                        <div className='Eventdes'>
                            <h2>{event.eve_name}</h2>
                            <p>{event.description}</p>
                        </div>
                    </div>
                ) : (
                    <div className='Eventshow' key={event.eve_id}>
                        <div className='Eventdes'>
                            <h2>{event.eve_name}</h2>
                            <p>{event.description}</p>
                        </div>
                        <img src={event.eve_pic} alt="" width="430" height="500" />
                    </div>
                )
            ))}
        </div>
    );
}

export default Events;
