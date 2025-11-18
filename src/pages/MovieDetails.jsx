import RecommendationList from "../components/RecommendationList";

export default function MovieDetails() {
  return (
    <>
    <section></section>
    <section>
      <div>
        <h3 className="recommendation-title">
        Filmes Recomendados baseado na sua pesquisa
      </h3>
      <RecommendationList id={1062722} />
      </div>
    </section>
    </>
  )
}