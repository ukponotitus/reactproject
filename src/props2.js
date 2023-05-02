export default function Text1(props){
    return(
        <div className="text1">
                        <h2>{props.title}</h2>
                        <p style={{
                                    marginBottom: "2px",
                                }}>{props.text}</p>
                        <a href="/">{props.link}</a>
                    </div>
    )
}