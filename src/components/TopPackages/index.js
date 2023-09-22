import './index.css'

const TopPackages = () => (
  <div className="top-packages-section">
    <img
      src="https://res.cloudinary.com/dzduqsp2x/image/upload/v1695353560/top_packages_text_rjfggm.png"
      alt="top-packages-text"
    />
    <p className="top-packages-section-desc">
      Explore our wide range of tests! We ensure that you don’t miss out on any
      chance to keep yourself healthy.
    </p>
    <ul className="top-packages-section-list">
      <li className="top-packages-section-item">
        <p className="top-packages-section-item-title">
          Basic Full Body Checkup
        </p>
        <div className="tps-item-rating-div">
          <p className="tps-item-rating-text">4.3</p>
          <img
            src="https://res.cloudinary.com/dzduqsp2x/image/upload/v1695353772/rating_star_single_jvhtzx.png"
            alt="rating-star"
          />
          <p className="tps-item-rating-count">(75 Reviews)</p>
        </div>
        <p className="tps-item-tests-text">Number of tests - 53 </p>
        <p className="tps-item-test-amount">
          MRP: &nbsp;{' '}
          <span className="tps-item-test-amount-cross">₹10,000</span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="tps-item-test-amount-offer">₹8,490</span>
        </p>
        <div className="tps-item-button-div">
          <button className="tps-item-button" type="button">
            Book now
          </button>
        </div>
      </li>
      <li className="top-packages-section-item">
        <p className="top-packages-section-item-title">
          Advance Full Body Checkup
        </p>
        <div className="tps-item-rating-div">
          <p className="tps-item-rating-text">4.7</p>
          <img
            src="https://res.cloudinary.com/dzduqsp2x/image/upload/v1695353772/rating_star_single_jvhtzx.png"
            alt="rating-star"
          />
          <p className="tps-item-rating-count">(100 Reviews)</p>
        </div>
        <p className="tps-item-tests-text">Number of tests - 70 </p>
        <p className="tps-item-test-amount">
          MRP: &nbsp;{' '}
          <span className="tps-item-test-amount-cross">₹12,000</span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="tps-item-test-amount-offer">₹10,000</span>
        </p>
        <div className="tps-item-button-div">
          <button className="tps-item-button" type="button">
            Book now
          </button>
        </div>
      </li>
      <li className="top-packages-section-item">
        <p className="top-packages-section-item-title">
          Liver Function Test (LFT)
        </p>
        <div className="tps-item-rating-div">
          <p className="tps-item-rating-text">4.3</p>
          <img
            src="https://res.cloudinary.com/dzduqsp2x/image/upload/v1695353772/rating_star_single_jvhtzx.png"
            alt="rating-star"
          />
          <p className="tps-item-rating-count">(43 Reviews)</p>
        </div>
        <p className="tps-item-tests-text">Number of tests - 89 </p>
        <p className="tps-item-test-amount">
          MRP: &nbsp;
          <span className="tps-item-test-amount-cross">₹13,299</span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="tps-item-test-amount-offer">₹11,299</span>
        </p>
        <div className="tps-item-button-div">
          <button className="tps-item-button" type="button">
            Book now
          </button>
        </div>
      </li>
    </ul>
  </div>
)

export default TopPackages
