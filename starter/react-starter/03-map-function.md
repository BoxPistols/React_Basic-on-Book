# 03 map function

## map

`配列 .map(  (value) => 新しい項目 )  );` 

```javascript

  const tableStyle = {
    border: '1px solid #ccc',
    backgroundColor: '#eee',
  }

  const thStyle = {
    color: 'aliceblue',
    backgroundColor: 'gray',
  }
  
  let data = [
    {name: 'Taro', mail: 'taro@yamada', age:45},
    {name: 'Hanako', mail: 'hanako@flower', age:28},    
    {name: 'Yoshihiko', mail: 'yoshihiko@good', age:32},
    {name: 'Boshihiko', mail: 'yoshihiko@good', age:24},
  ];
  
  
  let el = (
    <div>
      <table style={tableStyle}>
      <tr style={thStyle}>
        <th>name</th>
        <th>mail</th>
        <th>age</th>
      </tr>        
      {data.map((value) =>(
      <tr>        
        <td>{value.name}</td>
        <td>{value.mail}</td>
        <td>{value.age}</td>        
       </tr>
      ))}
      </table> 
    </div>
  );
  
  let dom = document.querySelector('#root');
  ReactDOM.render(el, dom);
```



