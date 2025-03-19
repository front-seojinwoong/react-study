import Link from "next/link";
const Aaa = () => {
  return (
    <div>
      <div>Aaa 페이지입니다.</div>

      <Link href="/section04/04-01-bbb">Bbb 페이지로 갈래요(react-router-dom 방식)</Link>

      <a href="/section04/04-01-bbb">Bbb 페이지로 갈래요(a 태그 방식)</a>

    </div>
  )
};

export default Aaa;
