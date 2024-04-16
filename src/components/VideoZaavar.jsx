import React, { useEffect, useState } from "react";

const fetchData = async () => {
  try {
    const response = await fetch(
      "https://192.168.90.91/apps/test_hr/intranet/test.php"
    );
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throwing the error to be caught by the caller
  }
};

// Call the fetchData function to fetch the data
const dataPromise = fetchData();

// Define an array to store the fetched data
let fetchedData = [];

// Use the dataPromise to handle the fetched data
dataPromise.then((data) => {
  // Handle the JSON data here
  console.log(data); // You can see the fetched data in the browser console
  fetchedData = data; // Save the fetched data to the array
});

function VideoZaavar() {
  return <div></div>;
}

export default VideoZaavar;
