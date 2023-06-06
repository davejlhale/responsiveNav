
import { PageContainer } from "../css/common.styles"
import { NavLink } from "react-router-dom";

const Homepage = () => {
    return (
        <PageContainer id="homepage">
            <div id="demo">
                <div className="signtext">

                    <article id="gameDevRoles">
                        <p>
                       homepage
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