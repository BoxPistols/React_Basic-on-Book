---
description: useEffect Basic
---

# useEffect

### useEffect Base

### Code

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

