type StatusProps = {
    status: string
}

const Status = (props: StatusProps) => {
    let message
    if (props.status === 'loading') {
        message = 'Loading...'
    } else if (props.status === 'success') {
        message = 'Data fetched successfully!'
    } else if (props.status === 'error') {
        message = 'Error Fetching Data'
    }
  return (
    <div>
        <h3>Status - {}</h3>
    </div>
  )
}

export default Status