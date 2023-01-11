import saveWater from "../../component/save-water.png";
import './contact.css'

export const Contact = () => {
    return (
        <div>
             <img src={saveWater} />
            <div className="contactContainer">
                    <h3 className="myName">Kevin Patel</h3>
                    <p>The Sparks Foundation</p>
                    <span className="quote">Save Water - Donate for better future</span>
                    <div   className="linkContainer">
                        <div>
                            <img style={{height: "100%", width: "40%"}} src="https://i.ibb.co/rH2X45c/linkedin-Logo.png" alt="linkedInLogo" />
                            <span>
                                <a className="link-name" href="https://www.linkedin.com/in/kevin-patel9" target="_blank">LinkedIn</a>
                            </span>
                        </div>
                        <div>
                            <img style={{height: "100%", width: "40%"}} src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GithubLogo" />
                            <span>
                                <a className="link-name" href="https://github.com/kevin-patel9" target="_blank">GitHub</a>
                            </span>
                        </div>
                    </div>
            </div>
        </div>
    );
}