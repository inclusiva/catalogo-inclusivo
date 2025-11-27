import RecommendationList from "../components/RecommendationList";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MovieDetailCard from "../components/MovieDetailCard";
import { useTranslation } from "../hooks/useTranslation";

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const translation = useTranslation();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const loadData = () => {
      setLoading(true);
      setTimeout(() => {
        setMovie({
          id: id,
          title: "Oppenheimer",
          overview: "A história do cientista americano J. Robert Oppenheimer e o seu papel no desenvolvimento da bomba atômica.",
          poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
          vote_average: 4.4,
          genres: [{ id: 1, name: "Drama" }, { id: 2, name: "História" }]
        });
        setLoading(false);
      }, 500);
    };

    loadData();
  }, [id]);


  if (loading) {
    return <div className="container container-loading">{translation.loading}.</div>;
  }
  return (

    <>
      <section>

        <div className="container">
          <button className="back-button" onClick={() => navigate("/")}>{translation.backButton}</button>

          <MovieDetailCard movie={movie} />

        </div>
      </section>
      <section>
        <div>
          <h3 className="recommendation-title">
            Filmes Recomendados baseado na sua pesquisa
          </h3>
          <RecommendationList id={1062722} />
        </div>
      </section>
    </>
  );
}