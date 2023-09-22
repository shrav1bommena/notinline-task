import {Component} from 'react'
import Header from '../Header'
import LabForm from '../LabForm'

import './index.css'
import WeKeepExpanding from '../WeKeepExpanding'
import TopPackages from '../TopPackages'
import WhyChooseUs from '../WhyChooseUs'
import Footer from '../Footer'

class Home extends Component {
  state = {}

  render() {
    return (
      <div className="home-bg">
        <Header />
        <LabForm />
        <WeKeepExpanding />
        <TopPackages />
        <WhyChooseUs />
        <Footer />
      </div>
    )
  }
}

export default Home
