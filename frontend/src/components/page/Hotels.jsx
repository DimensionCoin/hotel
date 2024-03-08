import React, { useState } from "react";
import hotels from "../utils.js"; // Adjust the import path as necessary

const Hotels = () => {
  const [filterRating, setFilterRating] = useState(0);

  const filteredHotels = hotels.filter(
    (hotel) => filterRating === 0 || hotel.rating === filterRating
  );

  return (
    <div>
      <div className="mb-4">
        <label htmlFor="ratingFilter" className="mr-2 ">
          Filter by Rating:
        </label>
        <select
          id="ratingFilter"
          onChange={(e) => setFilterRating(Number(e.target.value))}
        >
          <option value="0">All Ratings</option>
          <option value="5">5 Stars</option>
          <option value="4">4 Stars</option>
          <option value="3">3 Stars</option>
          <option value="2">2 Stars</option>
          <option value="1">1 Star</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredHotels.map((hotel) => (
          <div
            key={hotel.id}
            className="border rounded overflow-hidden shadow-lg p-4"
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">{hotel.name}</h3>
              <p>{hotel.description}</p>
              <p className="mt-2">
                <strong>Location:</strong> {hotel.location}
              </p>
              <p className="mt-2">
                <strong>Rating:</strong> {hotel.rating} Stars
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
