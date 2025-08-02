import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import fieldsApi from "service/ApiFields";  

export default function GestionDesStades({ color }) {
  const [fields, setFields] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [newField, setNewField] = useState({
    name: "",
    location: "",
    capacity: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewField({ ...newField, [name]: value });
  };

  const getFields = useCallback(async () => {
    try {
      const response = await fieldsApi.getAll();
      setFields(response.data);
    } catch (error) {
      console.error("Error fetching fields:", error);
    }
  }, []);

  useEffect(() => {
    getFields();
  }, [getFields]);

  const handleAddNewField = async () => {
    try {
      await fieldsApi.add(newField);
      setIsModalOpen(false);
      setNewField({ name: "", location: "", capacity: "" });
      getFields(); // Refresh list
      alert("Field added successfully!");
    } catch (error) {
      console.error("Error adding field:", error);
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
            Gestion des Stades
          </h3>
          <button
            className="bg-lightBlue-500 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none"
            onClick={() => setIsModalOpen(true)}
          >
            Add Stade
          </button>
        </div>

        {isModalOpen && (
          <div className="mt-4 p-4 border rounded bg-gray-100 dark:bg-gray-800">
            <label className="block mb-2 font-bold" htmlFor="name">
              Name
            </label>
            <input
              name="name"
              value={newField.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 mb-3 border rounded"
              type="text"
              placeholder="Stade name"
            />

            <label className="block mb-2 font-bold" htmlFor="location">
              Location
            </label>
            <input
              name="location"
              value={newField.location}
              onChange={handleInputChange}
              className="w-full px-3 py-2 mb-3 border rounded"
              type="text"
              placeholder="Stade location"
            />

            <label className="block mb-2 font-bold" htmlFor="capacity">
              Capacity
            </label>
            <input
              name="capacity"
              value={newField.capacity}
              onChange={handleInputChange}
              className="w-full px-3 py-2 mb-3 border rounded"
              type="number"
              placeholder="Capacity"
            />

            <div className="flex justify-end gap-2">
              <button
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                onClick={handleAddNewField}
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
              {["Name", "Location", "Capacity"].map((header) => (
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
            {fields.map((field) => (
              <tr key={field._id || field.id}>
                <td className="px-6 py-4 border-b">{field.name}</td>
                <td className="px-6 py-4 border-b">{field.location}</td>
                <td className="px-6 py-4 border-b">{field.capacity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

GestionDesStades.defaultProps = {
  color: "light",
};

GestionDesStades.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
