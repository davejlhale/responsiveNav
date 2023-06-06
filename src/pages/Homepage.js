
import { PageContainer } from "../css/common.styles"
import { NavLink } from "react-router-dom";

const Homepage = () => {
    return (
        <PageContainer id="homepage">
            <div id="demo">
                <div className="signtext">

                    <article id="gameDevRoles">
                        <p>
                            The current goal for many of us is to learn the unity interface and basic c# by doing some online tutorials to get to a point where we can contribute to some basic game projects.
                        </p>
                        <p>There are many other roles needed for game development and hopefully you can find out what you'd like to work towards by learning about the different roles
                            <NavLink to="/DeveloperRoles">here</NavLink>
                        </p>

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