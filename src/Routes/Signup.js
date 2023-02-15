import Navbar from "../Components/Navbar";
import "../Components/SignUpStyles.css";

function Signup(){
    return(
        <div className="form-signup">
        <Navbar/>
            <div>
              <form  onSubmit={()=>{alert("Sigup Successfully")}}>
                <h1>Sign Up</h1>
                <input type="text" placeholder="Name" required/>
                <input type="email" placeholder="Email" required/>
                <input type="text" placeholder="Address" required/>
                <input type="Date" placeholder="Date of Birth" required/>
                <input type="Number" placeholder="Mobile Number" required/>
                <button type="submit" className="button">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Signup;