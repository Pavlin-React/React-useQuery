const Planet = ( { planet } ) => {
  return (
    <div className="card">
      <h3>{ planet.name }</h3>
      <p>Population - { planet.pop }</p>
    </div>
  );
}
 
export default Planet;