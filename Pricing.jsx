import React from 'react'
import '../Assets/Pricing.css'
function Pricing() {
  return (
    <div className="pricing-table">
            <div className="pricing-card">
                <h2>ESSENTIALS</h2>
                <p className="description">For teams looking to engage an audience and build a community through events</p>
                <p className="price">₹17,900 <span>/event</span></p>
                <button className="try-now">TRY NOW</button>
                <div className="fundamentals">
                    <h3>Fundamentals</h3>
                    <ul>
                        <li>200 attendees/event</li>
                        <li>Unlimited sessions</li>
                        <li>Session duration - Up to 8 hours/session</li>
                        <li>25 speakers/event</li>
                        <li>15 sponsors/event</li>
                        <li>Exhibitors available as add-on</li>
                        <li>Spaces available as add-on</li>
                    </ul>
                </div>
            </div>
            <div className="pricing-card popular">
                <h2><span>★</span> MOST POPULAR <span>★</span></h2>
                <h2>PREMIUM</h2>
                <p className="description">For eventprofs requiring more flexibility and freedom with their event planning</p>
                <p className="price">₹35,900 <span>/event</span></p>
                <button className="try-now">TRY NOW</button>
                <div className="fundamentals">
                    <h3>Fundamentals</h3>
                    <ul>
                        <li>1000 attendees/event</li>
                        <li>Unlimited sessions</li>
                        <li>Session duration - Up to 8 hours/session</li>
                        <li>100 speakers/event</li>
                        <li>50 sponsors/event</li>
                        <li>5 exhibitors/event</li>
                        <li>Spaces available as add-on</li>
                    </ul>
                </div>
            </div>
            <div className="pricing-card">
                <h2>ULTIMATE</h2>
                <p className="description">For organizations and agencies planning events of all types and sizes</p>
                <p className="price">₹89,900 <span>/event</span></p>
                <button className="try-now">TRY NOW</button>
                <div className="fundamentals">
                    <h3>Fundamentals</h3>
                    <ul>
                        <li>5000 attendees/event</li>
                        <li>Unlimited sessions</li>
                        <li>Session duration - Up to 8 hours/session</li>
                        <li>200 speakers/event</li>
                        <li>100 sponsors/event</li>
                        <li>15 exhibitors/event</li>
                        <li>Spaces available as add-on</li>
                    </ul>
                </div>
            </div>
        </div>
  )
}

export default Pricing