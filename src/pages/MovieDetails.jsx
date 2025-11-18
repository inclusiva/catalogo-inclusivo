import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import MovieDetailCard from "../components/MovieDetailCard";

export default function MovieDetails() {
    const { id } = useParams();
    const navigate = useNavigate(); 

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
                    vote_average: 8.2,
                    genres: [{ id: 1, name: "Drama" }, { id: 2, name: "História" }]
                });
                setLoading(false);
            }, 500); 
        };

        loadData();
    }, [id]);
  

    if (loading) {
        return <div className="container container-loading">Carregando...</div>;
    }


    return (
        <div className="container">
            
           
            <button 
                onClick={() => navigate("/")} 
                style={{ 
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    fontSize: '1rem',
                    
                 
                    display: 'block', 
                    margin: '20px 0', 
                    color: 'var(--color-text-primary)', 
                    fontWeight: 'bold'
                }}
            >
                ⬅ Voltar para o início
            </button>

            <MovieDetailCard movie={movie} />
            
        </div>
    );
}