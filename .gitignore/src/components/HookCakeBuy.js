import React,{ useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux'; 
import { buyCake } from '../redux';

function HookCakeBuy( props ) {
    const numOfCakes = useSelector( state => state.cake.numOfCakes );
    const dispatch = useDispatch();
    return (
        <div>
             <h2> No of Cakes Hooks : { numOfCakes }</h2>
             <button onClick = { () => dispatch(buyCake()) }>Buy A Cake</button>  
        </div>
    )
} 
 

export default HookCakeBuy
