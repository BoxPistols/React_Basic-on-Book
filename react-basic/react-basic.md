---
description: React 再入門
---

# React Basic

## Props

Component

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

{% hint style="info" %}
 Super-powers are granted randomly so please submit an issue if you're not happy with yours.
{% endhint %}

Once you're strong enough, save the world:

{% code title="hello.sh" %}
```bash
# Ain't no code for that yet, sorry
echo 'You got to trust me on this, I saved the world'
```
{% endcode %}



