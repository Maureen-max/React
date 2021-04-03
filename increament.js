//set the first value to 5 and let it increament by 5 challenge
function Button(){
  
  const[counter,setCounter] = useState(5);
  return(
    <button onClick = {() => setCounter( counter+5 )}>{counter}
</button>
);
}
ReactDOM.render(
  </button>
  document.getElementById('root')
);
