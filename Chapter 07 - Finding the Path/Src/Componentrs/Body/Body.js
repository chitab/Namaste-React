import React, { useState, useEffect } from "react";
import FoodCard from "../Card/FoodCard";
import ShimmerUI from "../Shimmer/ShimmerUI";
import restraData from "../../Utils/constants";

const Body = () => {
    const [resList, setResList] = useState(restraData);
    const [searchValue, setSearchValue] = useState("");
    const [filteredData, setFilteredData] = useState(restraData);
    useEffect(() => {
      // fetchData();
    }, []);
    const fetchData = async () => {
      const API_URL =
        "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.362467819267135&lng=72.8599913790822&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
      let data = await fetch(API_URL);
      let jsonData = await data.json();
      setResList(
        jsonData.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredData(
        jsonData.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    };
  
    return (
      <>
        {resList.length === 0 ? (
          <ShimmerUI />
        ) : (
          <div className="food-container">
            <div>
              <button
                onClick={() => {
                  let restraData = resList.filter((value) => {
                    return value.info.avgRating >= 4;
                  });
                  setResList(restraData);
                  setFilteredData(restraData);
                }}
              >
                Filter Button
              </button>
            </div>
            <div>
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <button
                onClick={() => {
                  let filter = resList.filter((val) => {
                    return val.info.name
                      .toLocaleLowerCase()
                      .includes(searchValue.toLocaleLowerCase());
                  });
                  setFilteredData(filter);
                }}
              >
                Search
              </button>
            </div>
            <div className="foodCardWrapper">
              {filteredData.map((data) => {
                return <FoodCard restraData={data} key={data.info.id} />;
              })}
            </div>
          </div>
        )}
      </>
    );
}

export default Body;
