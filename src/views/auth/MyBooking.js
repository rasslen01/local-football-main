import React, { useEffect, useState } from "react";
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer";
import ApiBooking from "service/ApiBooking";

const MyBooking = () => {
  const [bookings, setBookings] = useState([
    { id: 1, date: "2025-08-01", time: "18:00", duration: "2h", stadium: "Stade Municipal" },
    { id: 2, date: "2025-08-05", time: "20:00", duration: "1h", stadium: "Stade Olympique" },
  ]);
  useEffect(() => {
    ApiBooking.getAll()
      .then((res) => setBookings(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Navbar transparent />
      <main>
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
                    Mes Réservations
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    Voici la liste de tes réservations de terrain.
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
            <div className="flex flex-wrap justify-center">
              <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md mt-32">
                {bookings.length === 0 ? (
                  <p className="text-center">Aucune réservation pour le moment.</p>
                ) : (
                  <ul className="space-y-4">
                    {bookings.map((b) => (
                      <li
                        key={b.id}
                        className="p-4 border rounded hover:shadow-lg transition cursor-pointer"
                      >
                        <h3 className="text-xl font-semibold">{b.date}</h3>
                        <p>
                          Heure : {b.time} - Durée : {b.duration}
                        </p>
                        <p className="text-blueGray-600">{b.stadium}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MyBooking;
