import React, { useState } from 'react'
import { FaCat } from "react-icons/fa";
import Order from './Order';

const showOrders = (props) => {
    return (<div>
        {props.orders.map(el => (
            <Order onDelete={props.onDelete} key={el.id} item={el} />
        ))}
    </div>)
}
const showNothing = () => {
    return (<div className='empty'>
        <p>Котят нет</p>
    </div>)
}


export default function Header(props) {
    let[cartOpen, setCartOpen] = useState(false)
    return (
        <header>
            <div>
                <span className='logo'>Balance</span>
                <ul className='nav'>
                    <li>Свяжитесь с нами</li>
                    <li>Контакты</li>
                </ul>
                <FaCat onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>

                {cartOpen && (
                    <div className='shop-cart'>
                        {props.orders.length > 0 ? showOrders(props) : showNothing()}
                    </div>
                )}
            </div>
            <div className='presentation'></div>
        </header>
    )
}
