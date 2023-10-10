import "./about.css";
import logo from "./EndImage.jpg";


function About() {
    return( 
        <div className='about page'>
            <div>
                <h3>👠KICK'IN UP HEELS👠</h3>
                <hr />
                
                <p>WE ARE HERE TO MAKE FEEL SEXY BEAUTIFUL AND CONFIDENT STARTING FROM YOUR HEELS AND UP.</p>
                <img src={logo} alt="EndImage" />
                
            </div>
            <div className='custom'>
                <p>Since 2001 we have made footware for women who have special requests and also able wear fashionable heels that is an accent to your clothing. </p>
                <p>We dont just custom make heels, but we aim to please and be sexy at the same. </p>
            </div>

           
            <h5>Created by: Gigi Bailey</h5>  
        </div>
    );
}

export default About;

