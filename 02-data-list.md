---
description: 02 Data list
---

# 02 Data list

```javascript
  let data = [
    <li>1</li>,
    <li>2</li>,
    <li>3</li>            
  ];
  
  
  let el = (
    <div>
      <ul>
        {data}
      </ul>
    </div>
  );
  
  let dom = document.querySelector('#root');
  ReactDOM.render(el, dom);
```

