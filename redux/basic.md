---
description: redux basic
---

# Basic

## Index

### GitHub

{% embed url="https://github.com/BoxPistols/firebase-twitte\_redux" %}

## Code

```javascript
import React, { useState } from 'react'
import './App.css'

const App: React.FC = () => {
    const [ input, setInput ] = useState('')
    const [ status, setState ] = useState<string | number>('テキスト')
    const [ counter, setCounter ] = useState(0)

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    return (
        <div className="App">
            <header className="App-header">
                {/* Text */}
                <h4>status: {status}</h4>
                <button onClick={() => setState('Nothing!')}>Count </button>

                {/* input */}
                <h4>input: {input}</h4>
                <input type="text" value={input} onChange={onChangeHandler} />

                {/* counter */}
                <h4>counter: {counter}</h4>
                <button onClick={() => setCounter((pr) => pr + 1)}>
                    Count{' '}
                </button>

            </header>
        </div>
    )
}

export default App

```



