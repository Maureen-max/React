//React code with jsx
function Hello(){
   return (
   <div>Hellow React</div>
   );
 }
ReactDOM.render(
<Hello/>,
  document.getElementById('mountNode'),
);
*/

//React code without jsx

Function Hello(){
  return( 
  React.createElement('div',null,'Hello React!!!');
   );
}

ReactDOM.render(
React.createElement(Hello,null),
  document.getElementById('mountNode');
);
