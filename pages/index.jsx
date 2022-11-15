import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useEffect} from "react"
import useGoogleOptimize from '@react-hook/google-optimize'


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

  const CartVariant = useGoogleOptimize('kMbu3v8SR5yh6Nao4eUjyg',[false, true])

  useEffect(()=> {
    console.log(88, CartVariant)
  },[CartVariant])

  return CartVariant ? 'tak': 'nie'
}
