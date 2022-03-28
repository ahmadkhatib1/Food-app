import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const Wapper = styled.div`
margin : 4rem 0rem;

`;
export const Card = styled.div`
height: 15rem;
overflow:hidden;
border-radius:2rem;
position:relative;
img{
    border-radius:2rem;
    position:absolute;
    left:0;
    width:100%;
    height:100%;
    object-fit:cover;
}
p{
      position:absolute;
    z-index:10;
    left:50%;
    bottom:0%;
    transform:translate(-50%,0%);
    color:white;
    width:100%;
    text-align:center;
    font-weight:600;
    font-size:1rem;
    height:40%;
    display:flex;
    justify-content:center;
    align-items:center;
}
`;
export const Gradiant = styled.div`
 position:absolute;
 top:0;
 left:0;
 width:100%;
 border-radius:2rem;
 height:100%;
 background:linear-gradient(rgb(0,0,0),rgba(0,0,0,0.5));
`;
export const List = styled.div`
display:flex;
justify-content:center;
margin:2rem 0;

`;
export const Slink = styled(NavLink)`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
border-radius:50%; 
margin-right:2rem;
text-decoration:none;
background:linear-gradient(35deg,#494949,#313131);
height:6rem;
width:6rem;
cursor:pointer;
transform:scale(0.8);
h4{
    font-size:0.8rem;
    color:white;
}
svg{
    color:white;
    font-size:1.5rem;
}
&.active{
    background:linear-gradient(to right,#f27121,#e94057);
}
`;
export const Form = styled.form`
margin: 0rem 20rem;

div{
position:relative;
width:100%;
}
input{
    border:none;
    background:linear-gradient(35deg,#494949,#313131);
    font-size:1.5rem;
    color:white;
    outline:none;
    border-radius:1rem;
    width:100%;
    padding:0.5rem 3rem;
}
svg{
    position:absolute;
    color:white;
    top:50%;
    left:0;
    transform:translate(100%,-50%);
}
`;