export default function Footer(props){
    return(
        <div className="images4">
            <img src={props.img} />
                <div className="text_1" style={{ marginTop: "10px", }}>
                    <h3> {props.title}</h3>
                    <p>{props.text}</p>
                    <a href="/">{props.link}</a>
                </div>
        </div>
    )
}