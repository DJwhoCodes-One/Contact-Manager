import React from 'react'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <img src="../../user.png" alt="Image" width={50} />
        <span>Contact Manager</span>
      </div>
      <div className={styles.right}>
        <a href="http://dj-gpt-sigma.vercel.app">
          <span>Ai Assistant</span>
          <img src="../../chat-bot.png" alt="Image" width={50} />
        </a>
      </div>
    </div>
  )
}
