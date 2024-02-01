import React from 'react'
import { useGlobalContext } from './context'
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
import styles from "./style.module.css"
import CartItem from "./components/CartItem"

function App() {
  const{loading} = useGlobalContext()
  if (loading) {
   return (
      <div className={styles.loading}>
        <h1>Loading...</h1>
      </div>
    )
   }
  return (
    <main>
      <Navbar />
      <CartContainer />
      <CartItem />
    </main>
  )
}
export default App