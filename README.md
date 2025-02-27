## react-router-dom

### Link 객체는 페이지 이동 기능을 해주는 객체이다.

```js
import { Link } from 'react-router-dom';
```

### { createBrowserRouter, RouterProvider }는 index.js에서 설정해주자.

```js
const pageLists = createBrowserRouter([
  {  }, {  }, ...
]);

root.render(<RouterProvider router={pageLists}/>)
```