export default function Object(props) {

    return(
        <div className="chemical-3" style={{ width: "50%",}}>
        <div className="images4">
            <img src={props.img} />
            <div className="text1" style={{ marginTop: "5px", }}>
                <h3> {props.title} </h3>
                <p style={{
                    marginBottom: "5px",
                }}> {props.text} </p>
                <button id="btn">{props.button}</button>
            </div>
        </div>
    </div>
    )

}