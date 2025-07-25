import { useState } from "react";

function TerrainCard() {
  const [note, setNote] = useState(4.2); // Note dynamique

  const renderStars = (note) => {
    const fullStars = Math.floor(note);
    const halfStar = note % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="text-yellow-400">★</span>);
    }
    if (halfStar) {
      stars.push(<span key="half" className="text-yellow-400">☆</span>);
    }
    while (stars.length < 5) {
      stars.push(<span key={stars.length} className="text-gray-300">★</span>);
    }

    return stars;
  };

  return (
    <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
        <img
          src="/images/stade1.jpg"
          alt="Terrain de foot"
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="px-4 py-5 flex-auto">
          <h6 className="text-xl font-semibold mb-2">Terrain Central Gafsa</h6>
          <p className="mb-4 text-blueGray-500">
            Terrain synthétique 7 vs 7 avec vestiaires, éclairage et parking. Disponible tous les jours.
          </p>

          <div className="flex flex-col items-start text-sm text-gray-600 mb-4">
            <p><span className="font-semibold">Joueurs réservés :</span> 12</p>
            <p><span className="font-semibold">Durée du match :</span> 1h</p>
            <p className="flex items-center">
              <span className="font-semibold mr-2">Avis :</span>
              {renderStars(note)}
              <span className="ml-2 text-gray-500">({note}/5)</span>
            </p>
          </div>

          <button className="bg-red-500 text-white font-bold px-6 py-2 rounded-full shadow hover:bg-red-600 transition duration-300">
            Réserver
          </button>
        </div>
      </div>
    </div>
  );
}

export default TerrainCard;
