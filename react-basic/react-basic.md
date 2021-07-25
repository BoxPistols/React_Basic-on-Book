---
description: React 再入門
---

# React再入門

参照　[https://nakanisi-yusuke.gitbooks.io/react-basic-udemy/content/meteno-react-app/es2015-no-import-export.html](https://nakanisi-yusuke.gitbooks.io/react-basic-udemy/content/meteno-react-app/es2015-no-import-export.html)

## [ReactCheetSheet](https://chott-works.com/tips/ReactCheetSheet)

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

### props省略

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

### export / import

#### export js / example -&gt; Valiable.js

```javascript
import React from 'react'

export const stringVal = "stringVal!"

export const myVal = () => {
  console.log("moge")
}

export const ReactEl = () => <h2>React Comp</h2>
```

#### import -&gt; index.js

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

// from export valiable or function
import { stringVal, myVal, ReactEl } from './Variable'

// import view
console.log(stringVal)
myVal()

const ReturnReactElement = ({ name, group }) => {
  return (
    <h2>
      <ReactEl /> // <- Add import Component
      {name} / {group}
    </h2>
  )
}

ReactDOM.render(
  <ReturnReactElement name="おれ" group="Aチーム" />,
  document.getElementById('root')
)
```





