import { useState } from "react";

const Header = ({totalSpend}) => {

    const[budget, setBudget] = useState(100);

    return(
    <div>
        <p className='title'>SHOPPING LIST</p> 

        <label htmlFor="budget">Enter your budget for shopping list £ </label>
        <input 
            id="budget" 
            type="number"
            // type="range"
            min="0"
            max="5000"
            defaultValue={100}
            // value={budget} 
            onChange={(event)=>{setBudget(+event.target.value)}} 
        />
        <br></br>

        <span className='totalCost'>Total cost of this shopping list £{totalSpend.toFixed(2)}</span> 
        <br></br>
        {totalSpend <= budget ? 
            <span></span> :
            <span id="budgetWarning"><b>WARNING: your budget has been exceeded</b></span>}
        <br></br>
        <br></br>
        <br></br>
    </div>
)
}

export default Header;
