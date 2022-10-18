import React, { useState } from "react";

function ListingCard({ listing, onDeleteListing }) {

  const { id, description, image, location } = listing

  const [isFavorite, setIsFavorite] = useState(false)

  const handleDelete = () => {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
    .then((response) => response.json())
    .then(() => {
      onDeleteListing(id)
    })
  }

  const handleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button onClick={handleFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavorite} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;


// import React, {useState} from "react";

// function ListingCard({description, image, location, handleDelete}) {

//   const [isFavorite, setIsFavorite] = useState(false)

//   const handleFavorite = () => {
//     setIsFavorite(!isFavorite)
//   }

//   return (
//     <li className="card">
//       <div className="image">
//         <span className="price">$0</span>
//         <img src={image} alt={description} />
//       </div>
//       <div className="details">
//         {isFavorite ? (
//           <button onClick={handleFavorite} className="emoji-button favorite active">★</button>
//         ) : (
//           <button onClick={handleFavorite} className="emoji-button favorite">☆</button>
//         )}
//         <strong>{description}</strong>
//         <span> · {location}</span>
//         <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
//       </div>
//     </li>
//   );
// }

// export default ListingCard;
