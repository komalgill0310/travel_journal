import React from "react";

export default function TravelCard(props){
  console.log(props.data);
  const {description, endDate, googleMapsUrl, imageUrl, location, startDate, title} = props.data
  return (
    <article className="travel-card">
      <img src={imageUrl} />
      <div>
        <img src="" alt="" />
        <p>{location}</p>
        <a href={googleMapsUrl} target="_blank">View on Google Maps</a>
      </div>
      <h2>{title}</h2>
      <p>{startDate} - {endDate}</p>
      <p>{description}</p>
    </article>
  )
}