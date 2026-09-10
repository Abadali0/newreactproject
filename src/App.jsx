import { NavLink } from "react-router";




function App(){

  return(
    <div className="text-red-500 m-8 animate-bounce">
      This is App.JSX
      <br />
      <NavLink to= "/about"end>About</NavLink>
      <NavLink to="/contact" end>
        Contact US
      </NavLink>
    </div>
  )
}
export default App;