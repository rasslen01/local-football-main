import React, { useEffect, useState } from "react";
import ApiTournaments from "service/ApiTournaments";
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer";

export default function Tournaments() {
  const [tournaments, setTournaments] = useState([]);
  const [form, setForm] = useState({ name: "", location: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTournaments();
  }, []);

  const fetchTournaments = async () => {
    try {
      const res = await ApiTournaments.getAll();
      setTournaments(res.data);
    } catch (error) {
      console.error("Erreur chargement tournois:", error);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!form.name || !form.location) {
      alert("Merci de remplir tous les champs");
      return;
    }
    setLoading(true);
    try {
      await ApiTournaments.add(FormData);
      alert("Tournoi créé !");
      setForm({ name: "", location: "" });
      fetchTournaments();
    } catch (error) {
      console.error("Erreur création tournoi:", error);
      alert("Erreur lors de la création");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar transparent />
      <main className="min-h-screen bg-blueGray-200 py-10">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6 text-center">Tournois</h2>
          <ul className="mb-10 space-y-2">
            {tournaments.map((t) => (
              <li
                key={t.id}
                className="bg-white p-4 rounded shadow flex justify-between"
              >
                <span>{t.name}</span>
                <span className="text-gray-600">{t.location}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-2xl font-semibold mb-4">Créer un tournoi</h3>
          <form
            onSubmit={handleCreate}
            className="bg-white p-6 rounded shadow space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Nom du tournoi"
              value={form.name}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded p-2 w-full"
            />
            <input
              type="text"
              name="location"
              placeholder="Lieu"
              value={form.location}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded p-2 w-full"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-lightBlue-500 text-white px-4 py-2 rounded hover:bg-lightBlue-600 transition"
            >
              {loading ? "Création..." : "Créer"}
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
