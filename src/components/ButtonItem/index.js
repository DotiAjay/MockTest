import './index.css'

const Tags = props => {
  const {tagDetails, changeActiveId} = props
  const {displayText} = tagDetails

  const getChange = () => {
    changeActiveId(displayText)
  }

  return (
    <li>
      <button type="button" className="button" onClick={getChange}>
        {displayText}
      </button>
    </li>
  )
}

export default Tags
