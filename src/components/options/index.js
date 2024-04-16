const Options = props => {
  const {optionDetails} = props
  const {displayText, optionId} = optionDetails
  return <option key={optionId}>{displayText}</option>
}
export default Options
