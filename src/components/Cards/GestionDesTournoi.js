import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import tournoisApi from "service/ApiTournaments";  // your API service

export default function GestionDesTournois({ color }) {
  const [tournois, setTournois] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // New tournoi form state
  const [newTournoi, setNewTournoi] = useState({
    name: "",
    location: "",
    date: "",
  });

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTournoi({ ...newTournoi, [name]: value });
  };

  // Fetch all tournois from API
  const getTournois = useCallback(async () => {
    try {
      const response = await tournoisApi.getAll();
      setTournois(response.data);
    } catch (error) {
      console.error("Error fetching tournois:", error);
    }
  }, []);

  useEffect(() => {
    getTournois();
  }, [getTournois]);

  // Add new tournoi
  const handleAddNewTournoi = async () => {
    try {
      await tournoisApi.add(newTournoi);
      setIsModalOpen(false);
      setNewTournoi({ name: "", location: "", date: "" });
      getTournois(); // Refresh list
      alert("Tournoi added successfully!");
    } catch (error) {
      console.error("Error adding tournoi:", error);
    }
  };

  return (
    <div
      className={
        "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
        (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
      }
    >
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center justify-between">
          <h3
            className={
              "font-semibold text-lg " +
              (color === "light" ? "text-blueGray-700" : "text-white")
            }
          >
            Gestion des Tournois
          </h3>
          <button
            className="bg-lightBlue-500 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none"
            onClick={() => setIsModalOpen(true)}
          >
            Add Tournoi
          </button>
        </div>

        {isModalOpen && (
          <div className="mt-4 p-4 border rounded bg-gray-100 dark:bg-gray-800">
            <label className="block mb-2 font-bold" htmlFor="name">
              Name
            </label>
            <input
              name="name"
              value={newTournoi.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 mb-3 border rounded"
              type="text"
              placeholder="Tournoi name"
            />

            <label className="block mb-2 font-bold" htmlFor="location">
              Location
            </label>
            <input
              name="location"
              value={newTournoi.location}
              onChange={handleInputChange}
              className="w-full px-3 py-2 mb-3 border rounded"
              type="text"
              placeholder="Tournoi location"
            />

            <label className="block mb-2 font-bold" htmlFor="date">
              Date
            </label>
            <input
              name="date"
              value={newTournoi.date}
              onChange={handleInputChange}
              className="w-full px-3 py-2 mb-3 border rounded"
              type="date"
            />

            <div className="flex justify-end gap-2">
              <button
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                onClick={handleAddNewTournoi}
              >
                Add
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Table */}
      <div className="block w-full overflow-x-auto mt-6">
        <table className="w-full bg-transparent border-collapse">
          <thead>
            <tr>
              {["Name", "Location", "Date"].map((header) => (
                <th
                  key={header}
                  className={
                    "px-6 py-3 border-b text-left text-xs uppercase font-semibold " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500"
                      : "bg-lightBlue-800 text-lightBlue-300")
                  }
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tournois.map((tournoi) => (
              <tr key={tournoi._id || tournoi.id}>
                <td className="px-6 py-4 border-b">{tournoi.name}</td>
                <td className="px-6 py-4 border-b">{tournoi.location}</td>
                <td className="px-6 py-4 border-b">{tournoi.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

GestionDesTournois.defaultProps = {
  color: "light",
};

GestionDesTournois.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
