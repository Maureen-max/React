//App is the parent to Button and display functions
function Button(props){
//const handleClick = () => setCounter(counter+1);
  return(
  <button onClick={props.onClickFunction}>
      +1
      </button>
      );
}
function Display(props){
  return(
  <div>{props.message}</div>
    
  );
}
function App(){
  
  const[counter,setCounter] = useState(42);
  const increamentCounter = () => setCounter(counter+1);
  return(
    <div>
    <button onClickFunction = {increamentCounter}/>
    <Display message = {counter}/>
      </div>
    );
}

ReactDOM.render(
  <App/>,
  document.getElementById('mountNode')
  );
