---
description: useEffect Basic
---

# useEffect

## useEffect Base

### Docs

{% embed url="https://qiita.com/seira/items/e62890f11e91f6b9653f" %}

### Code Basic

```javascript
useEffect(
    () => {
        console.log('move useEffect')
        document.title = `my title ${counter}`
        return () => {
            // cleanup
        }
    },
    [ counter ]
    /**
     * 第２引数設定
     * [ counter ] = useEffectの発火を絞る
     * [ ] だけ =　1回だけ発火 = カウンターに追従しない
    */
)
```

#### 

#### CleanUp関数 = ライフサイクル remove

CleanUp.tsx

```javascript
import React, { useState, useEffect, useMemo } from 'react'

const Cleanup: React.FC = () => {
    const [ currentNum, setCurrentNum ] = useState(0)
    const incNum = () => {
        console.log('incNum invoked!')
        setCurrentNum((pre) => pre + 1)
    }

    useEffect(
        () => {
            // effect
            console.log('mousedown invoked!')
            window.addEventListener('mousedown', incNum)
            return () => {
                console.log('CleanUp invoked!')
                window.removeEventListener('mousedown', incNum)
            }
        },
        [ currentNum ]
    )

    return (
        <div>
            <p>currentNum: {currentNum}</p>
        </div>
    )
}

export default Cleanup

```

App.tsx

```javascript
import React, { useState, useEffect } from 'react'
// import { Counter } from './features/counter/Counter'
import './App.css'
import Cleanup from './CleanUp'

const App: React.FC = () => {
    const [ status, setState ] = useState<string | number>('テキスト')
    const [ input, setInput ] = useState('')
    const [ counter, setCounter ] = useState(0)
    const [ display, setDisplay ] = useState(false)

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    useEffect(
        () => {
            console.log('move useEffect')
            document.title = `my title ${counter}`
            return () => {
                // cleanup
            }
        },
        [ counter ]
        /**
         * 第２引数設定
         * [ counter ] = useEffectの発火を絞る
         * [ ] だけ =　1回だけ発火 = カウンターに追従しない
        */
    )

    return (
        <div className="App">
            <header className="App-header">
                {/* Text */}
                <h4>status: {status}</h4>
                <button onClick={() => setState('Nothing!')}>Count </button>
                {/**
                 * setStateを通じてstatusを入れ替え
                 */}

                {/* input */}
                <h4>input: {input}</h4>
                <input type="text" value={input} onChange={onChangeHandler} />
                {/**
                 * onChangeHandler関数を通じてinputをBind
                 */}

                {/* counter */}
                <h4>counter: {counter}</h4>
                <button onClick={() => setCounter((pr) => pr + 1)}>
                    Count{' '}
                </button>
                {/**
                 * onChangeHandler関数を通じてinputをBind
                 */}

                {/* Clean Up */}
                <h4>CleanUp</h4>
                {display && <Cleanup />}
                <button onClick={() => setDisplay(!display)}>
                    Toggle Cleanup
                </button>
                {/* <Counter /> */}
            </header>
        </div>
    )
}

export default App

```

