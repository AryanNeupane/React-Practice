
function Button(text){
    return(
        <>
        <button style={{backgroundColor:"green",color:"white",padding:"10px 20px"}}> {text.text} {text.num}  </button>
        </>
    )
}

export  default Button