---
description: 03 bind inputForm ViewChange
---

# 04 ClickChangeEvent

```javascript
let dom = document.querySelector('#root');

let message = "お名前をどうぞ：";
let in_val = '';

let doChange = (e) => {
  in_val = e.target.value;
  message = 'Hello,' + in_val + 'さん';
}

let doAction = (e) =>{
  let el = (
    <div>
      <p>{message}</p>
      <div>
        <input type="text" onChange={doChange} />
        <button onClick={doAction}> Click </button>
      </div>
    </div>
  );
  ReactDOM.render(el, dom);
};

doAction();
```

