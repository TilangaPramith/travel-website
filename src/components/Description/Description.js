import "./DescriptionStyles.css"

function Description(props) {
    return (
        <div className="description">
            <h1>{props?.title}</h1>
            <p>{props?.text}</p>
        </div>
        
    )
}

export default Description;