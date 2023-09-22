import './index.css'

const Header = () => (
  <nav className="navbar">
    <div className="navbar-inner-div">
      <img
        src="https://res.cloudinary.com/dzduqsp2x/image/upload/v1695180720/notinline-logo_cg70id.png"
        alt="notinline-logo"
        className="navbar-logo"
      />
      <ul className="navbar-tabs-list">
        <li className="navbar-tab">Home</li>
        <li className="navbar-tab">Health conditions</li>
        <li className="navbar-tab active-tab">Lab tests</li>
        <li className="navbar-tab">Medicines</li>
        <li className="navbar-tab">
          <button type="button" className=" navbar-tab-actions">
            For patients
          </button>
        </li>
        <li className="navbar-tab">
          <button type="button" className=" navbar-tab-actions">
            For hospitals
          </button>
        </li>
      </ul>
      <button
        className="navbar-tab-actions navbar-tab-actions-playstore"
        type="button"
      >
        <img
          src="https://res.cloudinary.com/dzduqsp2x/image/upload/v1695188245/playstore-icon_zmio1q.png"
          alt="playstore-icon"
        />
        Play store
      </button>
    </div>
  </nav>
)

export default Header
