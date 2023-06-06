import {PageContainer} from "../css/common.styles"
import DiscordIcon from "../assets/discord.png";
import { StyledImageLink } from "../styles/Navbar.style";


const SignUp = () => {
    return (
        <PageContainer id="SignUp">
            no members area yet

            <div>
                <p>Join us on Discord</p>
            <StyledImageLink
                        href="https://discord.gg/TFeeEjN7gA"
                        src={DiscordIcon}
                        alt="Discord"
                        target="_blank"
                        transform="rotate(720deg)"
                        height='60px'
                        margin="auto"
                        
                        
                    />
                
            </div>
        </PageContainer>
    );
};
export default SignUp;