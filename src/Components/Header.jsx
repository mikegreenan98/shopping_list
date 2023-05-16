const Header = ({totalSpend}) => {

    return(
    <div>
    <p className='title'>SHOPPING LIST</p> 
    <p className='totalCost'>total cost of this shopping list £{totalSpend}</p> 
    </div>
    )
}

export default Header;