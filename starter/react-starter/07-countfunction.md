# 07 CountFunction

```javascript
const msg = {
  color: "orange"
}

function Welcome(props) {
  return <p style={props.style}>Hello, {props.name}!</p>
}

function Calc(props) {
  let total = 0;
  for(let i = 1; i <= props.number; i++){
    total += i;
  }
  return <p style={props.style}>合計は、{props.number}は{total}です。</p>
}

let el = (
  <div>
    <Welcome name="Ore" style={msg}/>
    <Calc number="4" />
  </div>
);

let dom = document.querySelector('#root');
ReactDOM.render(el, dom);

```

