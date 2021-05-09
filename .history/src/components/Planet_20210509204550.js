const Planet = ( { planet } ) => {
  return (
    <div className="card">
      <h3>{ planet.name }</h3>
      <p>Population - { planet.population }</p>
      <p> - { planet.terrain }</p>
    </div>
  );
}
 
export default Planet;