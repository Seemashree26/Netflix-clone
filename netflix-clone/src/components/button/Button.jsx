import "./Button.css";
const Button=({text,size})=>{
    return(
        <button className={`btn  ${size} `}>
            {text} 
            </button>
    )
}
export default Button;