import React,{useState,useEffect} from 'react';;

function App(props) {
  const[state,setState] =useState(props)
  const{name,price} =state

  useEffect(()=>{
    console.log("useEffect is invoked")
  })
  useEffect(()=>{
    console.log("componendDidMount ")
  },[])
  useEffect(()=>{
    console.log("callback name ")
  },[name])

  return (
    <>
      <p>現在の{name}は,{price}円です</p>
      <button onClick={()=> setState({...state,price: price+1})}>+1</button>
      <button onClick={()=> setState({...state,price: price-1})}>-1</button>
      <button onClick={()=>setState(props)}>Reset</button>
      <input value={name} onChange={e => setState({...state,name:e.target.value})}/>
    </>
  );
}

App.defaultProps ={
  name:'サンプル',
  price: 1000
}

export default App;
