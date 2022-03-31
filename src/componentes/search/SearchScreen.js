import { useNavigate, useLocation } from 'react-router-dom';
import querString from 'query-string';


import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';
import { useForm } from '../hooks/useForm';
import { useMemo } from 'react';

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q ='' } =querString.parse(location.search);
  const [state, handleInputChange]=useForm({
    searchText:q
  });
  const {searchText} =state;
  const heroes =useMemo(() => getHeroesByName(q), [q]) ;
  const handleSearch= (e) => {
    e.preventDefault();
    console.log(searchText)
    navigate(`?q=${ searchText }`)
  }
  return (
    <div>
      <h1>Busquedas</h1>
      <hr/>
      <div className="row">
        
        <div className="col-5">
          <h4>Buscar</h4>
          <hr/>

          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Buscar un heroe"
              className="form-control"
              autoComplete="off"
              name= "searchText"
              value={ searchText}
              onChange={handleInputChange}
            />
            <button className="btn btn-outline-primary mt-1" type="submit1">
              Buscar
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />
          {
            (q === '')
              ?  <div className="alert alert-info">Buscar un heroe</div>
              : (heroes.length === 0) && <div className="alert alert-danger">No hay resultados: {q} </div>
          }
          {
            heroes.map(hero=>(
              <HeroCard 
                key={hero.id}
                {...hero}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}
