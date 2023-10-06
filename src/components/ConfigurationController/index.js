import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="controller-container">
          <div className="responsive-container">
            <h1 className="layout-heading">Layout</h1>
            <div className="input-container">
              <input
                type="checkbox"
                id="Content"
                checked={showContent}
                onChange={onChangeContent}
              />
              <label htmlFor="Content" className="label-text">
                Content
              </label>
            </div>
            <div className="input-container">
              <input
                type="checkbox"
                id="LeftNavbar"
                checked={showLeftNavbar}
                onChange={onChangeLeftNavbar}
              />
              <label htmlFor="LeftNavbar" className="label-text">
                Left Navbar
              </label>
            </div>
            <div className="input-container">
              <input
                type="checkbox"
                id="RightNavbar"
                checked={showRightNavbar}
                onChange={onChangeRightNavbar}
              />
              <label htmlFor="RightNavbar" className="label-text">
                Right Navbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
