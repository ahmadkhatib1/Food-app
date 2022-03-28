import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Form } from './StyledComponents';
const Search = () => {
    const [valueInput, setvalueInput] = useState('');
    const navigation = useNavigate();
    const SubmetHandel = (event) => {
        event.preventDefault();
        navigation('/searched/' + valueInput);
    };
    return (
        <Form onSubmit={SubmetHandel}>
            <div>
                <FaSearch onClick={() => navigation('/searched/' + valueInput)}></FaSearch>
                <input
                    placeholder=' example Chocolate'
                    type="text"
                    value={valueInput}
                    onChange={(e) => setvalueInput(e.target.value)}
                />
            </div>
        </Form>
    )
}

export default Search;