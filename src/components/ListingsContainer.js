import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";


function ListingsContainer({ search }) {

  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(response => response.json())
      .then((listings) => setListings(listings))
  }, []);

  const handleDeleteListing = (id) => {
    const newListingArray = listings.filter(listing => listing.id !== id)
    setListings(newListingArray)
  }

  const filteredListings = listings.filter(listing => listing.description.toLowerCase().includes(search.toLowerCase()))

  const listingCard = filteredListings.map((listing) => {
    return <ListingCard
      key={listing.id}
      listing={listing}
      onDeleteListing={handleDeleteListing}
    />
  })

  return (
    <main>
      <ul className="cards">
        {listingCard}
      </ul>
    </main>
  );
}

export default ListingsContainer;


// import React from "react";
// import ListingCard from "./ListingCard";

// function ListingsContainer({listingData, search}) {

// const filteredListings = listingData.filter(listing => listing.description.includes(search))

// const listingCard = filteredListings.map((listing) => {
//   return <ListingCard 
//     key={listing.id} 
//     description={listing.description} 
//     image={listing.image} 
//     location={listing.location}
//     />
// })

//   return (
//     <main>
//       <ul className="cards">
//         {listingCard}
//       </ul>
//     </main>
//   );
// }

// export default ListingsContainer;
