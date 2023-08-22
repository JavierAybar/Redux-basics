import { CartIcon } from '../icons'
import { useSelector } from 'react-redux'



function Navbar() {

  const  amount  = useSelector((state) => state.cart.amount)

  return (
    <nav>
        <div className='nav-center'>
            <h3>Redux ToolKit</h3>
            <div className="nav-container">
                <CartIcon />
                <div className="amount-container">
                    <p className='total-amount'>{amount}</p>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar