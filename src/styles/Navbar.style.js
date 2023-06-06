import styled ,{keyframes} from "styled-components";

import { NavLink as Link } from 'react-router-dom';
const gradient  = keyframes`
     0%{background-position:70% 0%}
    50%{background-position:31% 100%}
    100%{background-position:70% 0%}
    `

export const NavbarContainer = styled.nav`
width: 100%;
height:${(props) => (props.extendNavbar ? "auto" : "80px")};
background-color: black;
display:flex;
flex-direction: column;
background: linear-gradient(209deg, #366c40, #62e53e);
    background-size: 400% 400%;

    -webkit-animation: ${gradient} 18s ease infinite;
    -moz-animation: ${gradient} 18s ease infinite;
    animation: ${gradient} 18s ease infinite;
  `;

export const NavLeftContainer = styled.nav`
flex:70%;
display:flex;
align-items:center;
padding-left:5%;
`

export const NavRightContainer = styled.nav`
flex:30%;
display:flex;
justify-content:flex-end;
padding-right:50px;
`


export const NavInnerContainer = styled.nav`
width:100%;
height:80px;
display:flex;`

export const NavLinkContainer = styled.nav`
display:flex;


`

export const NavLink = styled(Link)`
color:white;
font-size: x-large;
font-family: Arial, Helvetica, sans-serif;
text-decoration: none;
margin:10px;
transition: all 0.3s ease-in-out;
        &.active{
            color: #15cdfc;
    }
    &:hover{
        color: #15cdfc;
        transition: all 0.3s ease-in-out;
    }
@media (max-width:700px) {
    display:none;   
}
`


export const NavLinkExtended = styled(Link)`
color:white;
font-size: x-large;
font-family: Arial, Helvetica, sans-serif;
text-decoration: none;
margin:10px;
transition: all 0.3s ease-in-out;
        &.active{
            color: #15cdfc;
    }
    &:hover{
        color: #15cdfc;
        transition: all 0.3s ease-in-out;
    }
`
export const Logo = styled.img`
margin:10px;
max-width:200px;
height:auto;
`

export const NavHamburger = styled.button`
width:70px;
background: none;
border:none;
color:${(props) => (props.extendNavbar ? "red" : "white")};
font-size:45px;
cursor:pointer;
@media (min-width: 700px){
    display:none;
}
`
export const NavExtendedContainer = styled.div`
display: flex;
flex-direction:column;
align-items: center;
@media (min-width:700px){
    display: none;
}

`



const ImageLink = styled.a`
  /* Your link styles here */
  margin: ${props => (props.margin ? props.margin : 'none')};;
  
`;

const Image = styled.img`
   /* Your image styles here */
   transform: ${props => (props.transform ? props.transform : 'none')};
   transition: transform 0.3s ease;
  ${ImageLink}:hover & {
    transform: none;
  }
`;

export const StyledImageLink = ({ href, src, alt,target, ...otherProps }) => {
  return (
    <ImageLink href={href} target={target} {...otherProps}>
      <Image src={src} alt={alt} {...otherProps}/>
    </ImageLink>
  );
}
