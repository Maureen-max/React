function Button(props) {
  // const handleClick = () => setCounter(counter+1);
	return (
  	<button onClick={props.onClickFunction}>
      +{props.increment}
    </button>
  );
}

function Display(props) {
	return (
  	<div>{props.message}</div>
  );
}

function App() {
	const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter+increament);
	return (
    <div>
      <Button onClickFunction={incrementCounter} increment={100} />
      <Button onClickFunction={incrementCounter} increment={200} />
      <Button onClickFunction={incrementCounter} increment={300} />
      <Button onClickFunction={incrementCounter} increment={400} />
      <Display message={counter}/>
    </div>  
  );
}

ReactDOM.render(
  <App />, 
  document.getElementById('mountNode'),
);
