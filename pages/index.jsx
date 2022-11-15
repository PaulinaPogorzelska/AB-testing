import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useEffect} from "react"


export default function Home() {
  useEffect(()=> {
    if (window.dataLayer) {
      window.dataLayer.push({event: 'optimize.activate'});
    }
    console.log(33, window.dataLayer)

    if (window.google_optimize !== undefined) {
      const variant = window.google_optimize.get('kMbu3v8SR5yh6Nao4eUjyg');
      console.log(123,variant)
    }

  },[])

  return (
    <div className={styles.container} onClick={()=>{console.log(variant)}}>
      CHECK
    </div>
  )
}
