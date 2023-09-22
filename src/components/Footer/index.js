import './index.css'

const Footer = () => (
  <div className="footer-section">
    <div className="footer-top-section">
      <div className="footer-top-logo-div">
        <img
          src="https://res.cloudinary.com/dzduqsp2x/image/upload/v1695366328/not-inline-logo-footer_li3evc.png"
          alt="footer-logo"
        />
        <p className="footer-top-logo-text">
          Book doctor appointments online and get your ailments treated in no
          time with our expert medical support systems. Get rid of all your
          medical problem with our expert panel of doctors who guide you towards
          a healthier life.
        </p>
        <div className="footer-phone-div">
          <div className="footer-phone-no-div">
            <p className="footer-phone-no-country-code">+91</p>
            <input type="text" />
          </div>
          <button type="button">
            <img
              src="https://res.cloudinary.com/dzduqsp2x/image/upload/v1695366328/footer-call_d4fcze.png"
              alt="call-icon"
            />
          </button>
        </div>
      </div>
    </div>
    <hr />
  </div>
)

export default Footer
