type PersonListProps = {
    names: {
        firstName: string
        lastName: string
    }[]
}

const PersonList = (props: PersonListProps) => {
  return (
    <div>
        {props.names.map(name => {
            return (
                <h3 key={name.firstName}>{name.firstName} {name.lastName}</h3>
            )
        })}
    </div>
  )
}

export default PersonList