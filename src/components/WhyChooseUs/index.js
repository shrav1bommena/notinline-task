import './index.css'

const WhyChooseUs = () => (
  <div className="wcu-section">
    <div className="wcu-text-div">
      <img
        src="https://res.cloudinary.com/dzduqsp2x/image/upload/v1695358525/why_choose_us_text_w7xnp6.png"
        alt="wcu-text"
      />
      <p className="wcu-text-desc">
        We want you and your heart to be healthy so you can live a happy life!
      </p>
    </div>
    <div className="wcu-bottom-div">
      <div className="wcu-bottom-inner-div">
        <div className="wcu-bottom-item">
          <div className="wcu-item-title-div">
            <p className="wcu-item-title">NABL Accredited Labs</p>
            <img
              src="https://res.cloudinary.com/dzduqsp2x/image/upload/v1695358525/mc-5280_nabl_wcu_uxbsal.png"
              alt="wcu-nabl"
              className="wcu-item-image"
            />
          </div>
          <p className="wcu-item-desc">
            Get accurate and safe results from our NABL-certified lab partners.{' '}
          </p>
        </div>
        <div className="wcu-bottom-item">
          <div className="wcu-item-title-div">
            <p className="wcu-item-title">Timely collections</p>
            <img
              src="https://res.cloudinary.com/dzduqsp2x/image/upload/v1695358525/timely_collections_wcu_yxv4wo.png"
              alt="wcu-timely-collections"
              className="wcu-item-image"
            />
          </div>
          <p className="wcu-item-desc">
            We collect samples timely to prevent treatment delays and ensure
            your continued well-being.
          </p>
        </div>
      </div>
      <div className="wcu-bottom-inner-div wcu-bottom-inner-right-div">
        <div className="wcu-bottom-item">
          <div className="wcu-item-title-div">
            <p className="wcu-item-title">Value experience</p>
            <img
              src="https://res.cloudinary.com/dzduqsp2x/image/upload/v1695358525/value_experience_wcu_yhmzpu.png"
              alt="wcu-value-experience"
              className="wcu-item-image"
            />
          </div>
          <p className="wcu-item-desc">
            Experience seamless care without the hassle of waiting in long lines
            for an appointment. Book with us for a healthier lifestyle.
          </p>
        </div>
        <div className="wcu-bottom-item">
          <div className="wcu-item-title-div">
            <p className="wcu-item-title">Transparency</p>
            <img
              src="https://res.cloudinary.com/dzduqsp2x/image/upload/v1695358525/transparency_wcu_gxztox.png"
              alt="wcu-transparency"
              className="wcu-item-image"
            />
          </div>
          <p className="wcu-item-desc">
            Enjoy hassle free medical assistance with our transparent approach.
            We prioritize transparency for your smooth medical journey.
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default WhyChooseUs
