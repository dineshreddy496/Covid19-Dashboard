import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class Header extends Component {
  state = {show: false}

  onShow = () => {
    this.setState(prev => ({
      show: !prev.show,
    }))
  }

  onHide = () => {
    this.setState(prev => ({show: !prev.show}))
  }

  render() {
    const {show} = this.state
    return (
      <div className="nav-bg-container">
        <nav className="nav-bar-container">
          <Link to="/" className="link">
            <div>
              <h1 className="logo">
                COVID19<span className="logo-span">INDIA</span>
              </h1>
            </div>
          </Link>
          <div className="switch-button-container">
            <img
              className="switch-button"
              src="https://res.cloudinary.com/dffpcgabr/image/upload/v1628512287/icons/ctr9pqo3yllbrb520vkz.png"
              alt="toggle"
              onClick={this.onShow}
            />
          </div>

          <div className="nav-elements-container">
            <Link to="/">
              <h1 className="home-button">Home</h1>
            </Link>
            <Link to="/about">
              <h1 className="about-button">About</h1>
            </Link>
          </div>
        </nav>
        {show ? (
          <div className="nav-elements-sl">
            <div className="nav-buttons-container-sl">
              <Link to="/">
                <h1 className="home-button">Home</h1>
              </Link>
              <Link to="/about">
                <h1 className="about-button">About</h1>
              </Link>
            </div>
            <div className="cross-icon-container">
              <img
                src="https://res.cloudinary.com/dffpcgabr/image/upload/v1628512304/icons/tfcne9imxm53tseu4s3w.png"
                alt="cross-icon"
                onClick={this.onHide}
              />
            </div>
          </div>
        ) : null}
      </div>
    )
  }
}

export default Header
