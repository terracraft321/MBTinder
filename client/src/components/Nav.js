import blacklogo from '../images/MBTinder.png'
import colorLogo from '../images/MBTinder.png'

const Nav = ({ authToken, minimal, setShowModal, showModal, setIsSignUp }) => {
    const handleClick = () => {
      setShowModal(true);
      setIsSignUp(false);
    };
    
    return (
      <nav>
        <div className="logo-container">
          <img
            className="logo"
            src={minimal ? colorLogo : blacklogo}
            alt="logo"
          />
        </div>
        {!authToken && !minimal && (
          <button
            className="nav-button"
            onClick={handleClick}
            disabled={showModal}
          >
            Login
          </button>
        )}
      </nav>
    );
  };
  export default Nav;