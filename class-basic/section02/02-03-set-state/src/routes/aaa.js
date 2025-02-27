import { Link } from 'react-router-dom';

const Aaa = () => {

  return (
    <div>
      <div>Aaa 페이지 입니다.</div>
      {/* 1. 리액트의 이동방식 => SPA */}
      <Link to="/bbb">Bbb 페이지로 갈래요(react-router-dom방식)</Link>

      {/* 2. 전통적인 => MPA */}
      <a href="/bbb">Bbb 페이지로 갈래요(a 태그 방식)</a>
    </div>
  )
}

export default Aaa;