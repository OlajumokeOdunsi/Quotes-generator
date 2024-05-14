import React from 'react'
import { useState,useEffect } from 'react'
import styles from "./Quotes.module.css"
const url= "http://localhost:8080/Quotes/"




const Quotes = () => {
  const[quote, setQuote]= useState({})
  const fetchQuotes = async()=>{
    const response =  await fetch(url)
    console.log(url)
    const data = await response.json()
    console.log(data)
    setQuote(data)
    return data;
  }


  // useEffect(()=>{
  //   fetchQuotes().then(data=>setQuote(data))
  // },[])

  



  // if (!Array.isArray(quote)) {
  //   console.error('quote is not an array');
  //   return <div>Error: quote is not an array</div>;
  // }
  
  
  return (
    <>
    <div className={styles.container}>
        <div className={styles.midContainer}>
          <div className={styles.author}>
        <h3 className={styles.auths}> {quote.QUOTES}</h3> <br />
        <h3 className={styles.auth}> {quote.AUTHOR}</h3> <br/>
        <h3 className={styles.auth}> {quote.GENRE}</h3>  <br/>
        </div>


            <button onClick={()=>fetchQuotes()}>New quotes</button>

        </div>
      
      
    </div>
      
    </>
  )
}

export default Quotes
