import React, { useState, useEffect } from "react";
import BranchTree from "./BranchTree";
import EmployeeList from "./EmployeeList";
import SearchBar from "./SearchBar";
import SearchByBranch from "./SearchByBranch";

const Test = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [employeeData, setEmployeeData] = useState([]);
  const [brId, setBrId] = useState("1011000");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  // Fetching САЛБАРИЙН ЖАГСААЛТ
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://192.168.90.91/apps/test_hr/intranet/test.php"
        );
        const data = await response.json();
        setFetchedData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Fetching Employee Data
  useEffect(() => {
    const fetchEmployeeData = async () => {
      setIsLoading(true);
      if (brId !== "") {
        try {
          const response = await fetch(
            `https://192.168.90.91/apps/test_hr/intranet/employee_data_json.php?br_id=${brId}`
          );
          const data = await response.json();
          setEmployeeData(data);
        } catch (error) {
          console.log("Error fetching employee data: ", error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchEmployeeData();
  }, [brId]);

  // Searching Employees
  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchTerm.trim()) {
      setError("Search term is empty");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        "https://192.168.90.91/apps/test_hr/intranet/search-employee.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ search_term: searchTerm }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setResults(data);
      setEmployeeData(data);
      setError(null);
    } catch (error) {
      setError("Failed to fetch data");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  function handleClick(branchID) {
    if (branchID === "1010") {
      setBrId("1010100");
    } else if (branchID === "1011") {
      setBrId("1011000");
    } else {
      setBrId(branchID);
    }
  }
  return (
    <section className="flex">
      <BranchTree fetchedData={fetchedData} handleClick={handleClick} />

      <div className="w-full sticky top-16 h-5/6 ">
        <div className="flex justify-center items-center p-4 ">
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleSearch={handleSearch}
          />
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-full w-full pt-40">
            <p>УНШИЖ БАЙНА...</p>
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 ml-5">
              {" "}
            </div>
          </div>
        ) : (
          <EmployeeList employeeData={employeeData} />
        )}
      </div>
    </section>
  );
};
export default Test;
