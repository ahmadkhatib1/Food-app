import React from 'react';
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import { List, Slink } from './StyledComponents';
const Categoury = () => {
  return (
    <List>
      <Slink to="/cuisine/Italian" >
        <FaPizzaSlice />
        <h4>Italian</h4>
      </Slink>
      <Slink to="/cuisine/American"  >
        <FaHamburger />
        <h4>Amirecan</h4>
      </Slink>
      <Slink to="/cuisine/Thai" >
        <GiNoodles />
        <h4>Thai</h4>
      </Slink>
      <Slink to="/cuisine/Japanese" >
        <GiChopsticks />
        <h4>Jappanes</h4>
      </Slink>
    </List>
  )
}

export default Categoury