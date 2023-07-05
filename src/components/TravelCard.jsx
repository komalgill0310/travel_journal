import React from "react";

export default function TravelCard(props){
  const {description, endDate, googleMapsUrl, imageUrl, location, startDate, title} = props.data
  return (
    <article className="travel-card">
      <img src={imageUrl} className="travel-card--image"/>
      <div>
        <img src="" alt="" />
        <p className="travle-card--location">{location}</p>
        <a href={googleMapsUrl} target="_blank" className="travel-card--google-link">View on Google Maps</a>
      </div>
      <h2 className="travel-card--title">{title}</h2>
      <p className="travel-card--date">{startDate} - {endDate}</p>
      <p className="travel-card--description">{description}</p>
    </article>
  )
}