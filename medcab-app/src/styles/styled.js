import styled from 'styled-components';
import { Link } from 'react-router-dom';

////TO DO 4!Restyle fonts and colors////
//Header: font-family: "Yellowtail", cursive;
//Everything else: font-family: "Quicksand", sans-serif;


//App
export const ContainerDiv = styled.div`
display:flex;
flex-direction: column;
width: 100%;
font-size: 62.5%;
font-family: 'Nunito', sans-serif;
background-color: #FEFEFE;
margin: 0 auto;
padding: 0;
text-align: center;
`

//Navbar
export const NavbarDiv = styled.div`
display: flex;
flex-flow: row nowrap;
justify-content: flex-start;
width: 100%;
padding: 1% 0;
margin: 0;
`
export const Heading = styled.h1`
text-align: left;
font-size:1.5rem;
width:50%;
padding-left: 5%;
` 
export const NavbarUl = styled.ul`
list-style-type: none;
width:50%;
display: flex;
justify-content: flex-end;
align-items:center;
font-size: 1.25rem;
padding-right: 5%;
margin: 0;
`
export const NavbarLi = styled.li`
font-family: 'Nunito', sans-serif;
color: black;
`

//style on Nav links
export const NavbarLink = styled(Link)`
color: black;
display: block;
text-decoration: none;
padding: .6rem 1rem;
transition: all .5s ease;

&:focus, &:hover, &:active {
  color: #E84C3D;
}
`

//Forms
export const ContainerFormDiv = styled.div`
width: 50%;
font-family: 'Nunito', sans-serif;
background-color: #FEFEFE;
margin: 0 auto;
padding: 0;
`
export const StyleInput = styled.input`
font-size: 1rem;
font-family: 'Nunito', sans-serif;
letter-spacing: .1rem;
display: block;
width: 50%;
padding: 0.4rem;
border: 1px solid #333;
border-radius: 2px;
margin: 2% auto;
`
export const StyleLabel = styled.label`
font-size: 1.2rem;
font-family: 'Nunito', sans-serif;
`

//error div text
export const StyleError = styled.div`
font-size: 1rem;
text-align: center;
color: red;
line-height: 1.2rem;
background-color: lightgrey;
`

//other text in P tag
export const StyleP = styled.p`
font-size: 1rem;
text-align: center;
`

//buttons
export const StyleBtns = styled.button`
    font-size: 1.2rem;
    color: #F3F3F3;
    background-color: #E84C3D;
    padding: 1.5% 3%;
    border: 1px solid #333333;
    border-radius: 3px;
    margin: 1%;
    transition: all .5s ease;

    &:hover, &:active {
      background-color: #333333;
    }
`

//style the Links not in Navbar
export const StyleLink = styled(Link)`
  text-decoration: none;
  color: #E84C3D;
  transition: all .5s ease;

  &:hover, &:active {
    color: #333333;
  }
  `

  //Add style to Splash Image
  export const Splash = styled.img`
  max-width: 100%;
  width:80%;
  border-radius: 4px;
  `