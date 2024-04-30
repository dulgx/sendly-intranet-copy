import React, { useState } from "react";

function VideoZaavar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      setError("Search term is empty");
      return;
    }

    try {
      const response = await fetch(
        "https://192.168.90.91/apps/test_hr/intranet/search-employee.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ search_term: searchTerm }), // Ensure search_term is sent in the request body
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setResults(data);
      console.log(results);
      setError(null); // Reset error state if request succeeds
    } catch (error) {
      setError("Failed to fetch data");
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {error && <div>Error: {error}</div>}
      <ul>
        {results.map((item, index) => (
          <div className="text-center text-gray-500" key={index}>
            <img
              className="mx-auto mb-4 h-32 rounded-full"
              src={item.photo}
              alt="employee photo"
            />
            <h3 className="mb-1 text-base font-bold tracking-tight text-gray-900">
              <a>{item.name} </a>
            </h3>
            <p className="font-semibold text-slate-800 text-sm">
              {item.position}
            </p>
            <p>
              <span className="text-slate-900 font-semibold text-sm">
                Гар утас :
              </span>{" "}
              {item.mobile_phone}
            </p>
            <p className="cursor-pointer hover:text-blue-600 text-sm">
              <span className="text-slate-900 font-semibold ">И-мэйл :</span>{" "}
              <a
                className=" hover:text-cyan-800 hover:font-semibold font-medium text-sm"
                href={`mailto:${item.email}`}
              >
                {item.email}
              </a>
            </p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default VideoZaavar;
