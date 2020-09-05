import React,{ useState } from 'react';
import { useSelector,useDispatch } from 'react-redux'; 
import { buyCake } from '../redux';

function HookBuyCakeMultiple( props ) {
    const numOfCakes = useSelector( state => state.cake.numOfCakes );
    const dispatch = useDispatch();
    const [input, setInput] = useState(1);
    return (
        <div>
             <h2> No of Cakes Hooks : { numOfCakes }</h2>
             <input type="text" value={ input }  onChange={ (e) => setInput(e.target.value)} />
             
             <button onClick = { () => dispatch(buyCake( { buyTotal : input } )) }>Buy A Cake</button>  
        </div>
    )
} 
 

export default HookBuyCakeMultiple
