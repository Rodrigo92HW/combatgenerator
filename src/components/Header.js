import { Link } from "react-router-dom";
//Tope de Pagina
const Header = () => {
    return (
        <div className="navBar">
          <h2 className="Home"><Link to='/'>Home</Link></h2>
          <h2 className="combatManager"><Link to='/CombatManager'>Combat Manager</Link></h2>
          <h2 className="unitCreation"><Link to='/UnitCreation'>Unit Creation</Link></h2>
          <h2 className="unitList"><Link to='/UnitList'>Unit List</Link></h2>
        </div>
    );
}
  
export default Header;