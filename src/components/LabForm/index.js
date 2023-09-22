import {Component} from 'react'
import './index.css'

class LabForm extends Component {
  renderForm = () => (
    <form className="lab-form">
      <h1 className="lab-form-title">Fill in the details to get a call!</h1>
      <div className="lab-form-input-div">
        <label htmlFor="name">
          <img
            src="https://res.cloudinary.com/dzduqsp2x/image/upload/v1695194663/person-icon_nh0tqa.png"
            alt="person-icon"
          />
        </label>
        <input
          type="text"
          id="name"
          placeholder="Full name"
          className="lab-form-text-input"
        />
      </div>
      <div className="lab-form-input-div">
        <label htmlFor="number">
          <img
            src="https://res.cloudinary.com/dzduqsp2x/image/upload/v1695194663/call-icon_ajpkhn.png"
            alt="phone-icon"
          />
        </label>
        <input
          type="text"
          id="number"
          placeholder="Phone number"
          className="lab-form-text-input"
        />
      </div>
      <div className="lab-form-input-div">
        <label htmlFor="location">
          <img
            src="https://res.cloudinary.com/dzduqsp2x/image/upload/v1695194663/distance-icon_rjyjyc.png"
            alt="person-icon"
          />
        </label>
        <input
          type="text"
          id="location"
          placeholder="Location"
          className="lab-form-text-input"
        />
      </div>
      <div className="lab-form-input-div lab-form-input-check-div ">
        <input className="lab-form-input-checkbox" type="checkbox" checked />
        <p className="lab-form-policy-text">
          By continuing, you agree to our <span>T&C</span> and{' '}
          <span>privacy policy</span>
        </p>
      </div>
      <div className="lab-form-submit-div">
        <button className="lab-form-submit-button" type="submit">
          Proceed
        </button>
      </div>
    </form>
  )

  render() {
    return (
      <>
        <div className="lab-form-background">
          <div>
            {this.renderForm()}
            <div className="discount-div">
              <div className="discount-amount-div">
                <p className="discount-amount-text">
                  Get a Full Body Checkup Now at{' '}
                  <span className="discount-amount-text-cross">₹ 5,999</span> ₹
                  999
                </p>
              </div>
              <p className="discount-amount-percentage">70% OFF</p>
            </div>
          </div>
          <img
            src="https://res.cloudinary.com/dzduqsp2x/image/upload/v1695193077/Hero_text_image_cjo1to.png"
            alt="best-in-class"
            className="best-in-class-image"
          />
        </div>
        <div className="nabl-and-free-sample-div">
          <div className="nabl-and-free-sample-inner-div">
            <img
              src="https://res.cloudinary.com/dzduqsp2x/image/upload/v1695289344/mc-5280_nabl_eyme7u.png"
              alt="mc-5280"
            />
            <p className="nabl-and-free-sample-text nabl-text">
              NABL Accredted Labs
            </p>
            <img
              src="https://res.cloudinary.com/dzduqsp2x/image/upload/v1695289344/free_sample_collection_u1hppd.png"
              alt="free-sample-collection-img"
            />
            <p className="nabl-and-free-sample-text free-sample-text">
              Free sample collection
            </p>
          </div>
        </div>
      </>
    )
  }
}

export default LabForm
