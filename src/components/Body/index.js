import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => {
  const renderLeftNavbar = () => (
    <div className="left-navbar">
      <h1 className="heading">Left Navbar Menu</h1>
      <ul className="list-items">
        <li className="item">Item1</li>
        <li className="item">Item2</li>
        <li className="item">Item3</li>
        <li className="item">Item4</li>
      </ul>
    </div>
  )
  const renderRightNavbar = () => (
    <div className="right-navbar">
      <h1 className="heading">Right Navbar</h1>
      <div className="boxes-container">
        <div className="ad-box">Ad 1</div>
        <div className="ad-box">Ad 2</div>
      </div>
    </div>
  )
  const renderContent = () => (
    <div className="content-container">
      <h1 className="heading">Content</h1>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam.
      </p>
    </div>
  )

  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {showContent, showLeftNavbar, showRightNavbar} = value
        return (
          <div className="body-container">
            {showLeftNavbar && renderLeftNavbar()}
            {showContent && renderContent()}
            {showRightNavbar && renderRightNavbar()}
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}
export default Body
