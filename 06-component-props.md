# 06 Component props

```javascript
const msg = {
  color: "orange"
}

function Welcome(props) {
  return <p style={props.style}>Hello, {props.name}!</p>
}

let el = (
  <div>
    <Welcome name="Ore" style={msg}/>    
  </div>
);

let dom = document.querySelector('#root');
ReactDOM.render(el, dom);

```

