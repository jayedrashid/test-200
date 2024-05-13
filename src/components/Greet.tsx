
type GreetProps = {
    name: string
    messageCount: number
    isLoggedIn: Boolean
}

export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h1>
                {
                    props.isLoggedIn ? 
                    `Welcome, ${props.name} employees! The company has more than ${props.messageCount} years of experience.` 
                    :
                    `Welcome Guest!`
                }
            </h1>
        </div>
    )
}