import "./ContentStyles.css"
function Content (props) {
    return (
        <>
        <div className={props.cName}>
            {!props?.noImage && (
                <img alt="hero" src={props.image}></img>
            )}
            <div className="hero-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
            </div>
        </div>
        </>
    )


}

export default Content;