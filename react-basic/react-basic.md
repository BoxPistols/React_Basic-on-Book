---
description: React 再入門
---

# React Basic

## Props

Component

[https://github.com/BoxPistols/hello-react-window/pull/3/commits/7307438a2f56f6952922aabebb0a75a3b69c11a7](https://github.com/BoxPistols/hello-react-window/pull/3/commits/7307438a2f56f6952922aabebb0a75a3b69c11a7)

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// const returnReactElement = (val) => <h2>{val}</h2>
const ReturnReactElement = props => {
  return (
    <h2>
      {props.name} / {props.group}
    </h2>
  )
}

ReactDOM.render(
  <ReturnReactElement name='おれ' group='Aチーム' />,
  document.getElementById('root')
)

```

#### props省略

```javascript
// const returnReactElement = (val) => <h2>{val}</h2>
const ReturnReactElement = ({ name, group }) => {
  return (
    <h2>
      {name} / {group}
    </h2>
  )
}
ReactDOM.render(
  <ReturnReactElement name='おれ' group='Aチーム' />,
  document.getElementById('root')
)
```





