
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Gride = styled(motion.div)`
display:grid;
grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
grid-gap:3rem;
`;
export const Card = styled(motion.div)`
img{
    width:100%;
    border-radius:2rem;
}
a{
    text-decoration:none;
}
h4
{
    text-align:center;
    padding:1rem;
}
`;
export const DetailsWapper = styled(motion.div)`
margin-top:10rem;
margin-bottom:5rem;
display:flex;
.active{
       background:linear-gradient(35deg,#494949,#313131);
       color:white;
}
h2{
    margin-bottom:2rem;
}
li{
    font-size:1.2rem;
    line-height:2.2rem;
}
ul{
    margin-top:2rem;
}
`;
export const Button = styled.button`
padding:1rem 2rem;
color:#313131;
background:white;
border:2px solid #000;
margin-right:2rem;
font-weight:600;
`;
export const Info = styled(motion.div)`margin-left:10rem;`;