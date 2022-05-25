import React, { useState } from "react";

function Drop() {

  const [country, updateCountry] = useState(0);
  const data = [
    {
      name: "Sumit",
      country: "india",
      contact: 9988987652,
      Emai: "ssuu@gmail.com",
    },
    {
      name: "Suresh",
      country: "australia",
      contact: 9984987652,
      Emai: "srfuu@gmail.com",
    },
    {
      name: "NIMIt",
      country: "canada",
      contact: 9985987652,
      Emai: "sfuu@gmail.com",
    },
    {
      name: "Raina",
      country: "india",
      contact: 9981987652,
      Emai: "s5uu@gmail.com",
    },
    {
      name: "Ashok",
      country: "india",
      contact: 9986987652,
      Emai: "sruu@gmail.com",
    },
    {
      name: "John",
      country: "japan",
      contact: 9988987652,
      Emai: "ssuu@gmail.com",
    },
    {
      name: "Rick",
      country: "japan",
      contact: 9983987652,
      Emai: "ss@gmail.com",
    },
    {
      name: "Nick",
      country: "canada",
      contact: 9986987652,
      Emai: "s34s@gmail.com",
    },
  ];

  function ItemChanged(event) {
    updateCountry(event.target.value);
  }
  return <div>
    <label htmlFor="country">Choose Your Country</label>
    <select id="country" onChange={ItemChanged}>
      <option value="none">Choose country</option>
      <option value="india">India</option>
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="japan">Japan</option>
      <option value="All">All</option>

    </select>

    {
      data.map((object) => {

        if (object.country === country  || country === 'All') {
          return <div style={{ margin: 16 }}>
            {object.name}<br />
            {object.country}<br />
            {object.Emai}<br />
            {object.contact}<br />
            <br />

          </div>
        }


      })}
  </div>

}

export default Drop;
