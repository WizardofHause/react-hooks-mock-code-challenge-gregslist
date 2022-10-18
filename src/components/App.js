import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [search, setSearch] = useState('')


  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className="app">
      <Header search={search} handleSearch={handleSearch} />
      <ListingsContainer search={search} handleSearch={handleSearch} />
    </div>
  );
}

export default App;

// import React, { useState, useEffect } from "react";
// import Header from "./Header";
// import ListingsContainer from "./ListingsContainer";

// function App() {

//   const [listings, setListings] = useState([])
//   const [search, setSearch] = useState('')

// useEffect(() => {
//   fetch("http://localhost:6001/listings")
//   .then(response => response.json())
//   .then((listings) => setListings(listings))
// }, []);

// const handleSearch = (e) => {
//   setSearch(e.target.value)
// }

//   return (
//     <div className="app">
//       <Header search={search} handleSearch={handleSearch}/>
//       <ListingsContainer listingData={listings} search={search} handleSearch={handleSearch}/>
//     </div>
//   );
// }

// export default App;
