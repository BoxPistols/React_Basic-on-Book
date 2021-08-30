---
description: example get json
---

# Axios

### Example

```typescript
import * as React from 'react'
import axios from 'axios'

export default function DogApi() {
  const onClickUsers = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        console.log(res.data[0].name)
      })
      .catch((err) => {
        console.log('oh! : ' + err)
      })
  }
  const onClickUsers1 = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users?id=1')
      .then((res) => {
        console.log(res.data[0].email)
      })
      .catch((err) => {
        console.log('oh! : ' + err)
      })
  }
  return (
    <div>
      <h1>Dogs</h1>
      <button onClick={onClickUsers}>onClickUsers</button>
      <button onClick={onClickUsers1}>onClickUsers1</button>
    </div>
  )
}

```

### Docs

{% embed url="https://qiita.com/keyakko/items/ec536545d2faa9cabc84" %}

