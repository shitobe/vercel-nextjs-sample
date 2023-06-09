'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <main className={styles.main}>
      <div>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>
          カウントアップ
        </button>
      </div>
    </main>
  )
}