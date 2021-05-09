const Person = ( { person } ) => {
  return (
    <div className="card">
      <h3>{ person.name }</h3>
      <p>Gender - { person.gender }</p>
      <p>Gender - { person.bird_year }</p>
    </div>
  );
}
 
export default Person;