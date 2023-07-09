import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="Navbar">
      <div className="Navcontainer">
        <span className="logo">PlanNow</span>
        <div className="navItems">
          <div className="Menus">
            <a className="Home">Home</a>
            <a className="Discovery">Discovery</a>
            <a className="Experience">Experience</a>
            <a className="Contact">Contact</a>
          </div>
        </div>
        <div className="navButtons">
          <a className="ListYourProperty">List Your Property</a>
          <button className="login">Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
