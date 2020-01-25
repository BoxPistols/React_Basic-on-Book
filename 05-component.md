# 05 Component

```javascript
const msg = {
  color: "orange"
}

function Welcome(props) {
  return <p>Hello!</p>
}

let el = (
  <div style={msg}>
    <Welcome />    
  </div>
);

let dom = document.querySelector('#root');
ReactDOM.render(el, dom);

```

