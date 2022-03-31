import { useParams, Navigate, useNavigate } from "react-router-dom"
import { useMemo } from "react";
import { getHerobyId } from "../../selectors/getHeroeById";

export const HeroScreen = () => {
  const {heroId} = useParams();
  const hero = useMemo(() =>getHerobyId(heroId), [heroId]);
  const navigate = useNavigate()
  if(!hero) {
    return <Navigate to ='/' />
  }

  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = hero
  const imagePath =`/assets/${heroId}.jpg`;
  const handleReturn = () => {
    navigate(-1);
  }
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={ imagePath}
          alt={superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8">
      <h3>{hero.superhero}</h3>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><b>Alter ego:</b> {alter_ego}</li>
        <li className="list-group-item"><b>Publisher:</b> {publisher}</li>
        <li className="list-group-item"><b>First Appearance:</b> {first_appearance}</li>
      </ul>
      <h5>Characters</h5>
      <p>{ characters }</p>
      <button 
        className="btn btn-outline-info"
        onClick={ handleReturn }
      >
        Regresar
      </button>
      </div>
    </div>
  )
}
