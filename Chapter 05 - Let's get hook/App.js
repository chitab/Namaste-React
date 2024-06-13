import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Src/Componentrs/Headers/Header";
import FoodCard from "./Src/Componentrs/Card/FoodCard";
import restrarantData from './Src/Utils/constants';

const FoodContainer = () => {
    const [resList, setResList] = useState(restrarantData);
    
    return (
        <div className="food-container">
            <Header />
            <div>
                <button onClick={() => {
                    let restraData = resList.filter((value) => {
                       return value.info.avgRating >=4
                    });
                    setResList(restraData)
                }}>Filter Button</button>
            </div>
            <div className="foodCardWrapper">
            {resList.map((data) => {
                return <FoodCard restraData={data} key={data.info.id}/>
            })}
            </div>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FoodContainer />);
