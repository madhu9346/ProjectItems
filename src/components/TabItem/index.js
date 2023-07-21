import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isUnderLine} = props
  const {displayText, tabId} = tabDetails

  const updateId = () => {
    updateActiveTabId(tabId)
  }

  const activeTabBtnClassName = isUnderLine ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabBtnClassName}`}
        onClick={updateId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
