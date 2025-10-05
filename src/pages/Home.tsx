// src/pages/Home.tsx
import React, { useState, useEffect } from "react";
import { Place } from "../types";
import { mockPlaces } from "../data/mockData";
import Header from "../components/Header";
import FilterBar from "../components/FilterBar";
import PlaceCard from "../components/PlaceCard";
import PlaceDetail from "../components/PlaceDetail";
import { motion, AnimatePresence } from "framer-motion";

function Home() {
  const [places, setPlaces] = useState<Place[]>(mockPlaces);
  const [filteredPlaces, setFilteredPlaces] = useState<Place[]>(mockPlaces);
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState("All");
  const [selectedRating, setSelectedRating] = useState(0);
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    let filtered = places;

    if (searchTerm) {
      filtered = filtered.filter(
        (place) =>
          place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          place.cuisine.toLowerCase().includes(searchTerm.toLowerCase()) ||
          place.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCuisine !== "All") {
      filtered = filtered.filter((place) => place.cuisine === selectedCuisine);
    }

    if (selectedRating > 0) {
      filtered = filtered.filter((place) => place.rating >= selectedRating);
    }

    if (showFavorites) {
      filtered = filtered.filter((place) => place.isFavorite);
    }

    filtered = filtered.sort((a, b) => a.distance - b.distance);

    setFilteredPlaces(filtered);
  }, [places, searchTerm, selectedCuisine, selectedRating, showFavorites]);

  const handleToggleFavorite = (id: string) => {
    const updatedPlaces = places.map((place) =>
      place.id === id ? { ...place, isFavorite: !place.isFavorite } : place
    );
    setPlaces(updatedPlaces);

    if (selectedPlace && selectedPlace.id === id) {
      setSelectedPlace({
        ...selectedPlace,
        isFavorite: !selectedPlace.isFavorite,
      });
    }
  };

  const handlePlaceClick = (place: Place) => {
    setSelectedPlace(place);
  };

  const handleBackToList = () => {
    setSelectedPlace(null);
  };

  if (selectedPlace) {
    return (
      <PlaceDetail
        place={selectedPlace}
        onBack={handleBackToList}
        onToggleFavorite={handleToggleFavorite}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        showFavorites={showFavorites}
        onToggleFavorites={() => setShowFavorites(!showFavorites)}
      />

      <FilterBar
        selectedCuisine={selectedCuisine}
        onCuisineChange={setSelectedCuisine}
        selectedRating={selectedRating}
        onRatingChange={setSelectedRating}
      />

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="mb-6">
          <motion.h2
            className="text-2xl font-bold text-gray-800 mb-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {showFavorites ? "Your Favorite Places" : "Deccan Feast"}
          </motion.h2>
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            {filteredPlaces.length} place
            {filteredPlaces.length !== 1 ? "s" : ""} found
            {searchTerm && ` for "${searchTerm}"`}
          </motion.p>
        </div>

        {filteredPlaces.length === 0 ? (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-6xl mb-4 animate-bounce">🍽️</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {showFavorites ? "No favorites yet" : "No places found"}
            </h3>
            <p className="text-gray-600 mb-4">
              {showFavorites
                ? "Start exploring and add some places to your favorites!"
                : "Try adjusting your search or filters to find more places."}
            </p>
            {(searchTerm ||
              selectedCuisine !== "All" ||
              selectedRating > 0 ||
              showFavorites) && (
              <motion.button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCuisine("All");
                  setSelectedRating(0);
                  setShowFavorites(false);
                }}
                className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Clear All Filters
              </motion.button>
            )}
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredPlaces.map((place) => (
                <motion.div
                  key={place.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.12)" }}
                >
                  <PlaceCard
                    place={place}
                    onClick={() => handlePlaceClick(place)}
                    onToggleFavorite={handleToggleFavorite}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </main>
    </div>
  );
}

export default Home;
