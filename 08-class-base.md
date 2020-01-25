# 08 Class Base

```javascript
const msg = {
  color: "orange"
}

class Hello extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return <p style={msg}>Hello!</p>
  }
}

let el = (
  <div>
    <Hello />
  </div>
);

let dom = document.querySelector('#root');
ReactDOM.render(el, dom);
```

