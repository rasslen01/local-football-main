import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "components/Footers/Footer";
import Navbar from "components/Navbars/AuthNavbar.js";

const Booking = () => {
  const [bookingData, setBookingData] = useState({
    date: "",
    time: "",
    duration: "1h",
  });
    const [showStadiums, setShowStadiums] = useState(false);
    const [stadiums] = useState([
    "Stade Municipal",
    "Stade de la Ville",
    "Stade des Sports",
    "Stade Olympique",
    "Stade de la Plage",
    "Stade du Parc",
    ]);
const history = useHistory();

  const handleChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  alert("Réservation envoyée !");
  console.log(bookingData);

  // Redirection vers MyBooking
  history.push("/mybooking");
};


  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url(" + require("assets/img/terrain.jpg").default + ")",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Organise, Réserve, joue.
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    Une plateforme dédiée aux passionnés de football local. Crée
                    ton équipe, réserve ton terrain, affronte d'autres joueurs
                    près de chez toi.
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

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md mt-10">
                <h2 className="text-2xl font-bold mb-4 text-center">
                  Réserver un terrain
                </h2>
                <form onSubmit={handleSubmit}>
                  <label className="block mb-2">
                    Date :
                    <input
                      type="date"
                      name="date"
                      value={bookingData.date}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border rounded"
                      required
                    />
                  </label>

                  <label className="block mb-2">
                    Heure :
                    <input
                      type="time"
                      name="time"
                      value={bookingData.time}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border rounded"
                      required
                    />
                  </label>

                  <label className="block mb-2">
                    Durée :
                    <select
                      name="duration"
                      value={bookingData.duration}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border rounded"
                    >
                      <option value="1h">1 heure</option>
                      <option value="2h">2 heures</option>
                      <option value="3h">3 heures</option>
                    </select>
                  </label>
                   <div className="block mb-2">
    <span className="block mb-1 font-semibold">Stade :</span>
    <button
      type="button"
      onClick={() => setShowStadiums(!showStadiums)}
      className="text-lightBlue-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
    >
      {bookingData.stadium ? `Stade : ${bookingData.stadium}` : "Choisir Stade"}
    </button>

    {showStadiums && (
      <ul className="mt-2 border rounded bg-white shadow">
        {stadiums.map((stadium) => (
          <li
            key={stadium}
            className="p-2 hover:bg-blue-100 cursor-pointer"
            onClick={() => {
              setBookingData({ ...bookingData, stadium });
              setShowStadiums(false);
            }}
          >
            {stadium}
          </li>
        ))}
      </ul>
    )}
  </div>

                  <button
                    type="submit"
                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
};

export default Booking;
