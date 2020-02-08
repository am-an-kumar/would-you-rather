// will be used in React components to show poll timestamp in a user friendly format
export const formatDate = timestamp => {
  const date = new Date(timestamp)
  const time = date.toLocaleTimeString('en-US')
  return (
    time.substring(0, 5) + time.slice(-2) + ' | ' + date.toLocaleDateString()
  )
}
