import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from '../context'
import styles from "../style.module.css"

const CartContainer = () => {
  const { cart, total, clearCart } = useGlobalContext()
  if (cart.length === 0) {
    return (
      <section className={styles.cart}>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className={styles.emptycart}>is currently empty</h4>
        </header>
      </section>
    )
  }
  return (
    <section className={styles.cart}>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className={styles.carttotal}>
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button
          className={`${styles.btn} ${styles.clearbtn}`}
          onClick={clearCart}
        >
          clear cart
        </button>
      </footer>
    </section>
  )
}

export default CartContainer
