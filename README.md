## react-router-dom

### Link 객체는 페이지 이동 기능을 해주는 객체이다.

```js
import { Link } from "react-router-dom";
```

### { createBrowserRouter, RouterProvider }는 index.js에서 설정해주자.

```js
const pageLists = createBrowserRouter([
  {  }, {  }, ...
]);

root.render(<RouterProvider router={pageLists}/>)
```

## 디바운싱, 쓰로틀링

- 디바운싱: 특정시간이내, 추가입력 없을시, 마지막 1회만 실행
- 쓰로틀링: 특정시간이내, 추가입력있어도, 처음 1회만 실행
