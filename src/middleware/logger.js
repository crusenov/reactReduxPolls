const logger = (store) => (next) => (action) => {
  console.log(123123123)
  console.group(action.type)
  console.log('The action: ', action)
  const returnValue = next(action)
  console.log('The new state is: ', store.getState())
  console.groupEnd()

  return returnValue
}

export default logger