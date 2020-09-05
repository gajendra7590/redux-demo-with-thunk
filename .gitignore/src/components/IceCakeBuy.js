import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { buyCake,buyIcecream } from '../redux'; //import actions 


function IceCakeBuy() { 
    const cake = useSelector( state => state.cake );
    const icecream = useSelector( state => state.icecream ); 
    const dispatch = useDispatch(); 

    return (
        <div>
            <div>
                <h2>No of cakes : { cake.numOfCakes }</h2>
                <button onClick={ () => dispatch(buyCake())}>Buy Cake</button>
            </div> 
            <div> 
                <h2>No of icecream : { icecream.numOfIceCreams } </h2>
                <button onClick={ () => dispatch(buyIcecream())}>Buy IceCream</button>
            </div>
        </div>
    )
}

export default IceCakeBuy
