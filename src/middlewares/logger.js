// logs action and updated state after every action to console(during development)
const logger = store => next => action => {
  console.group(action.type)
  console.group('action')
  console.dir(action)
  console.groupEnd()
  next(action)
  console.group('new state')
  console.dir(store.getState())
  console.groupEnd()
  console.groupEnd()
}

export default logger
