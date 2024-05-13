type HeadingProps = {
  children: string
}

const Heading = (props: HeadingProps) => {
  // console.log(props);
  
  return (
    <div>
        <h2>{props.children}</h2>
    </div>
  )
}

export default Heading
