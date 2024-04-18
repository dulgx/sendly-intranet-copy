import React, { useState, useEffect } from "react";

function VideoZaavar() {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://192.168.90.91/apps/test_hr/intranet/test.php"
        );
        const data = await response.json();
        setFetchedData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {fetchedData.map((item, index) => (
          <li key={index}>
            {item.br_id} - {item.br_name} - {item.is_salbar}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VideoZaavar;
