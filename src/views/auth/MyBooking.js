import React, { useState } from "react";
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer";

// Exemple de données fictives (tu remplaceras ça par une API plus tard)
const initialBookings = [
  { id: 1, date: "2025-08-01", time: "18:00", stadium: "Stade Municipal", status: "En attente" },
  { id: 2, date: "2025-08-05", time: "20:00", stadium: "Stade Olympique", status: "En attente" },
];

const MyBooking = () => {
  const [bookings, setBookings] = useState(initialBookings);

  // Fonction pour valider une réservation
  const handleValidate = (id) => {
    const updated = bookings.map((b) =>
      b.id === id ? { ...b, status: "Validée" } : b
    );
    setBookings(updated);
  };

  // Fonction pour annuler une réservation
  const handleCancel = (id) => {
    const updated = bookings.map((b) =>
      b.id === id ? { ...b, status: "Annulée" } : b
    );
    setBookings(updated);
  };

  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div className="absolute top-0 w-full h-full bg-center bg-cover"
               style={{
                 backgroundImage: "url(" + require("assets/img/terrain.jpg").default + ")",
               }}>
            <span className="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
          <div className="container relative mx-auto text-center">
            <h1 className="text-white font-bold text-5xl">Mes Réservations</h1>
          </div>
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-xl shadow-md p-6 max-w-2xl mx-auto">
              {bookings.length === 0 ? (
                <p className="text-center">Aucune réservation.</p>
              ) : (
                <table className="min-w-full border">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border px-4 py-2">Date</th>
                      <th className="border px-4 py-2">Heure</th>
                      <th className="border px-4 py-2">Stade</th>
                      <th className="border px-4 py-2">Statut</th>
                      <th className="border px-4 py-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((booking) => (
                      <tr key={booking.id}>
                        <td className="border px-4 py-2">{booking.date}</td>
                        <td className="border px-4 py-2">{booking.time}</td>
                        <td className="border px-4 py-2">{booking.stadium}</td>
                        <td className="border px-4 py-2">{booking.status}</td>
                        <td className="border px-4 py-2">
                          <div className="flex space-x-2">
                            <button
                              onClick={() => handleValidate(booking.id)}
                              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              disabled={booking.status !== "En attente"}
                            >
                              Valider
                            </button>
                            <button
                              onClick={() => handleCancel(booking.id)}
                              className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              disabled={booking.status !== "En attente"}
                            >
                              Annuler
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MyBooking;
