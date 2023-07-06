import React from "react";

export default function TravelCard(props){
  const {description, endDate, googleMapsUrl, imageUrl, location, startDate, title} = props.data
  return (
      <article className="travel-card">
        <img src={imageUrl} className="travel-card--image"/>
        <div className="card-info">          
          <div className="travel-card--details">
            <img src="/map-logo.png" alt="Google Map Icon" className="travel-card--map-icon"/>
            <p className="travel-card--location">{location}</p>
            <a href={googleMapsUrl} target="_blank" className="travel-card--google-link">View on Google Maps</a>
          </div>
          <h2 className="travel-card--title">{title}</h2>
          <p className="travel-card--date">{startDate} - {endDate}</p>
          <p className="travel-card--description">{description}</p>
        </div>
      </article>
  )
}