import "./HeroStyle.css"
import video from "../assets/video.mp4";
function Hero(props){
return(
    <>
<div  className={props.cName}>
{
    (props.flag==="true")?
    <video autoPlay loop muted playsInline>
        <source src={video}/>
    </video>:
    <img src={props.heroImg} alt="" />
}
</div>
<div className="hero-text" >
<h1>{props.title}</h1>
<p>{props.text}</p>
<a href={props.url} className={props.btnClass} >{props.buttonText}</a>
</div>

    </>
);
}
export default Hero;