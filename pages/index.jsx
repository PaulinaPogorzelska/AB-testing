import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useEffect} from "react"
import useGoogleOptimize from '@react-hook/google-optimize'


export default function Home() {
  useEffect(()=> {
    if (window.dataLayer) {
      console.log(33)
      window.dataLayer.push({event: 'optimize.activate'});
    }
    if (typeof window !== "undefined") {
    console.log(window?.google_optimize?.get('kMbu3v8SR5yh6Nao4eUjyg'))
    }
  },[])

  return <button onClick={()=>console.log(window?.google_optimize?.get('kMbu3v8SR5yh6Nao4eUjyg'))}>TAK</button>
}
