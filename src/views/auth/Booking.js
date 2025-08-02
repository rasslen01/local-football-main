import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer";

const stadiums = [
  "Stade Municipal",
  "Stade de la Ville",
  "Stade des Sports",
  "Stade Olympique",
  "Stade de la Plage",
  "Stade du Parc",
];

export default function Booking() {
  const [bookingData, setBookingData] = useState({
    date: "",
    time: "",
    duration: "1h",
    stadium: "",
  });
  const [showStadiums, setShowStadiums] = useState(false);
  const history = useHistory();

  const handleChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const handleStadiumSelect = (stadium) => {
    setBookingData({ ...bookingData, stadium });
    setShowStadiums(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bookingData.stadium) {
      alert("Merci de choisir un stade.");
      return;
    }
    alert("Réservation envoyée !");
    console.log(bookingData);
    history.push("/mybooking");
  };

  return (
    <>
      <Navbar transparent />
      <main>
        {/* Section bannière */}
        <div
          className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75"
          style={{
            backgroundImage:
              "url(" + require("assets/img/terrain.jpg").default + ")",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>

          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Réserver un terrain
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    Choisis la date, l’heure, la durée et le stade pour ta
                    réservation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        {/* Section Formulaire */}
        <section className="pb-20 bg-blueGray-200 -mt-14">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center">
              <div className="max-w-lg w-full bg-white rounded-2xl shadow-lg p-8 mt-10">
                <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
                  Informations de réservation
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Date */}
                  <div>
                    <label className="block mb-1 font-medium text-gray-700">
                      Date :
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={bookingData.date}
                      onChange={handleChange}
                      required
                      className="p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-lightBlue-400 focus:outline-none"
                    />
                  </div>

                  {/* Heure */}
                  <div>
                    <label className="block mb-1 font-medium text-gray-700">
                      Heure :
                    </label>
                    <input
                      type="time"
                      name="time"
                      value={bookingData.time}
                      onChange={handleChange}
                      required
                      className="p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-lightBlue-400 focus:outline-none"
                    />
                  </div>

                  {/* Durée */}
                  <div>
                    <label className="block mb-1 font-medium text-gray-700">
                      Durée :
                    </label>
                    <select
                      name="duration"
                      value={bookingData.duration}
                      onChange={handleChange}
                      className="p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-lightBlue-400 focus:outline-none"
                    >
                      <option value="1h">1 heure</option>
                      <option value="2h">2 heures</option>
                      <option value="3h">3 heures</option>
                    </select>
                  </div>

                  {/* Stade */}
                  <div className="relative">
                    <label className="block mb-1 font-medium text-gray-700">
                      Stade :
                    </label>
                    <button
                      type="button"
                      onClick={() => setShowStadiums(!showStadiums)}
                      className="bg-lightBlue-500 hover:bg-lightBlue-600 transition text-white px-4 py-3 rounded-lg w-full text-left "
                    >
                      {bookingData.stadium || "Choisir un stade"}
                    </button>
                    {showStadiums && (
                      <ul className="absolute z-20 mt-2 bg-white border border-gray-200 rounded-lg w-full shadow-md max-h-40 overflow-auto">
                        {stadiums.map((stadium) => (
                          <li
                            key={stadium}
                            onClick={() => handleStadiumSelect(stadium)}
                            className="p-3 hover:bg-blue-100 cursor-pointer"
                          >
                            {stadium}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Bouton */}
                  <button
                    type="submit"
                    className="bg-lightBlue-500 hover:bg-lightBlue-600 transition text-white font-bold py-3 rounded-lg w-full mt-6"
                  >
                    Réserver
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
