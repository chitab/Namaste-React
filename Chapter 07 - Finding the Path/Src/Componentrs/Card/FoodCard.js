import React from "react";
const FoodCard = ({restraData}) => {
    const {name, cloudinaryImageId,avgRating, cuisines} = restraData.info;
    return (
        <div className="foodCard">
            <img className="card-image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="NA" />
            <h1 className="card-title">{name}</h1>
            <h2 className="card-rating">{avgRating} stars</h2>
            <h5 className="card-description">{cuisines.join(',')}</h5>
        </div>
    )
}
export default FoodCard;