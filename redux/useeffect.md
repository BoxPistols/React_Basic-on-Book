---
description: useEffect Basic
---

# useEffect

## useEffect Base

### Docs

{% embed url="https://qiita.com/seira/items/e62890f11e91f6b9653f" %}

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

