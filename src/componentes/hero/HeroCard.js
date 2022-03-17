
export const HeroCard = ({
  id,
  superhero,
  publisher, 
  alter_ego,
  first_appearance,
  characters}) => {
  return (
    <div className="col">
      <div className="card">
        {superhero} {id}
      </div>
    </div>
  )
}
