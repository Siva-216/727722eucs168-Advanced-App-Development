import React from 'react';
import { useParams } from 'react-router-dom';
import Wedpic from '../Assets/Images/events.jpg';
import '../Assets/EventDetail.css';

function EventDetail() {
  const { id } = useParams();
  
  // Replace this with a real fetch or context state
  const events = [
    { eve_id: 1, eve_name: "Wedding", eve_pic: Wedpic, description: "Detailed information about the Wedding event." },
    { eve_id: 2, eve_name: "House Warming", eve_pic: Wedpic, description: "Detailed information about the House Warming event." },
    { eve_id: 3, eve_name: "Birthday Party", eve_pic: Wedpic, description: "Detailed information about the Birthday Party event." },
    { eve_id: 4, eve_name: "Baby Shower", eve_pic: Wedpic, description: "Detailed information about the Baby Shower event." },
    { eve_id: 5, eve_name: "Puberty", eve_pic: Wedpic, description: "Detailed information about the Puberty event." },
    { eve_id: 6, eve_name: "Ear Piercing", eve_pic: Wedpic, description: "Detailed information about the Ear Piercing event." }
  ];

  const event = events.find(e => e.eve_id.toString() === id);

  return (
    <div className="EventDetailContainer">
      <div className="EventDetailHeader">
        <h1>{event.eve_name}</h1>
      </div>
      <div className="EventDetailContent">
        <img src={event.eve_pic} alt={event.eve_name} />
        <p>{event.description}</p>
      </div>
    </div>
  );
}

export default EventDetail;
