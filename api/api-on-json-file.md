---
description: data.json
---

# JSON on Local

## Links

{% embed url="https://github.com/BoxPistols/React-Basic\_210830" caption="GitHub" %}

{% embed url="https://codesandbox.io/s/hardcore-framework-1ksc5" caption="CodeSandBox" %}



App.js

```javascript
import "./styles.css";
import Data from "./data.json"; // 追加

export default function App() {
  const Datas = Data.data;

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>some magic happen!</h2>
      <div>
        <ul>
          {Datas.map((user) => (
            <li key={user.id}>
              {user.first_name}: {user.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
import "./styles.css";
import Data from "./data.json"; // 追加

export default function App() {
  const Datas = Data.data;

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>some magic happen!</h2>
      <div>
        <ul>
          {Datas.map((user) => (
            <li key={user.id}>
              {user.first_name}: {user.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

```

data.json

```javascript
{
  "page": 2,
  "per_page": 6,
  "total": 12,
  "total_pages": 2,
  "data": [
    {
      "id": 7,
      "email": "michael.lawson@reqres.in",
      "first_name": "Michael",
      "last_name": "Lawson",
      "avatar": "https://reqres.in/img/faces/7-image.jpg"
    },
    {
      "id": 8,
      "email": "lindsay.ferguson@reqres.in",
      "first_name": "Lindsay",
      "last_name": "Ferguson",
      "avatar": "https://reqres.in/img/faces/8-image.jpg"
    },
    {
      "id": 9,
      "email": "tobias.funke@reqres.in",
      "first_name": "Tobias",
      "last_name": "Funke",
      "avatar": "https://reqres.in/img/faces/9-image.jpg"
    },
    {
      "id": 10,
      "email": "byron.fields@reqres.in",
      "first_name": "Byron",
      "last_name": "Fields",
      "avatar": "https://reqres.in/img/faces/10-image.jpg"
    },
    {
      "id": 11,
      "email": "george.edwards@reqres.in",
      "first_name": "George",
      "last_name": "Edwards",
      "avatar": "https://reqres.in/img/faces/11-image.jpg"
    },
    {
      "id": 12,
      "email": "rachel.howell@reqres.in",
      "first_name": "Rachel",
      "last_name": "Howell",
      "avatar": "https://reqres.in/img/faces/12-image.jpg"
    }
  ],
  "support": {
    "url": "https://reqres.in/#support-heading",
    "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
  }
}

```

