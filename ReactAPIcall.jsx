import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const ReactAPIcall = () => {
 const [num,setNum]=useState()
 const [name,setName]=useState()
 const [moves,setMoves]=useState()

useEffect(()=>{

//now we have to fetch PokeAPI

async function getData(){
    // const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/1`)
    const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
    console.log(res.data)
    console.log(res.data.name)//just name of character will be shown



    setName(res.data.name)
    // setMoves(res.data.moves) error because
    //moves are in array so we write this
    setMoves(res.data.moves.length)
}
getData();
});

    return (
   <>
 <h1>You choose  <span style={{color:'red'}}> {num}</span></h1>
<h1>My name is <span style={{color:'red'}}>{name}</span></h1>
<h1>I have <span style={{color:'red'}}>{moves} moves</span></h1>

   <select value={num} onChange={(event)=>{
setNum(event.target.value)
   }}>    <option value='1'>1</option>
    <option value='25'>25</option>
    <option value='3'>3</option>
    <option value='4'>4</option>
    <option value='5'>5</option>
   </select>
   </>
  )
}


export default ReactAPIcall


//install axios package 
//Search PokeAPI
//then copy link