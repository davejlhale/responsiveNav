
import { PageContainer } from "../css/common.styles"
import { NavLink } from "react-router-dom";

const Homepage = () => {
    return (
        <PageContainer id="homepage">
            <div id="demo">
                <div className="signtext">

                    <article id="gameDevRoles">
                        <p>
                            Within the field of game development, there are various types of jobs that involve different aspects of the game creation process. Here are some common job roles found in game development.
                        </p>

                        <NavLink to="/DeveloperRoles"> Developer Roles</NavLink>

                    </article>
                    <div className="btntext">
                        <div className="">
                            <p className="text">
                                Don't have an account yet? Click here
                            </p>
                        </div>
                        <div className="topbtn">
                            <NavLink className="button" to="/SignUp">
                                Sign Up
                            </NavLink>
                        </div>
                    </div >

                </div>



            </div>
        </PageContainer>
    );
};
export default Homepage;