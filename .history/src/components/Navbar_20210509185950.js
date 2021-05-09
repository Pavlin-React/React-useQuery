const Navbar = ( { setPage } ) => {
  return (
    <nav>
      <button onClick={ setPage( 'pla' ) }>Planets</button>
      <button>People</button>
    </nav>
  );
}
 
export default Navbar