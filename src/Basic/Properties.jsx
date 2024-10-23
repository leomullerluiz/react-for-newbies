//Props are a way to pass data from a parent component to a child component
//Props are read-only and cannot be modified by the child component
const Properties = (properties) => {

    return (
        <p style={{ color: properties.text_color }}>{properties.text}</p>
    )
}

export default Properties