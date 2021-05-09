const Navbar = ( { setPage } ) => {
  return (
    <nav>
      <button onClick={ set }>Planets</button>
      <button>People</button>
    </nav>
  );
}
 
export default Navbar