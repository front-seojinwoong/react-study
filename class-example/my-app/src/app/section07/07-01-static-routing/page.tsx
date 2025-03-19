"use client";

import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String){
    createBoard(writer: $writer, title: $title, contents: $contents) {
      number
    }
  }
`
const StaticRoutingPage = () => {
  const router = useRouter();
  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [ createBoard ] = useMutation(CREATE_BOARD);

  const handleChangeWriter = (e: ChangeEvent<HTMLInputElement>) => {
    setWriter(e.target.value);
  }
  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }
  const handleChangeContents = (e: ChangeEvent<HTMLInputElement>) => {
    setContents(e.target.value);
  }

  const handleSubmit = async () => {
    try {
      const result = await createBoard({
        variables: {
          writer,
          title,
          contents
        }
      });
      alert('게시글 작성 완료!');
      router.push(`/section07/07-01-static-routing-moved/${result.data.createBoard.number}`)
      console.log(result);
    } catch (error) {
      alert('오류가 발생했습니다');
      console.error(error.message);
    }
  }
  return (
    <div>
      작성자 : <input type="text" onChange={handleChangeWriter} style={{border: '1px solid black', margin: '5px'}}/><br />
      제목 : <input type="text" onChange={handleChangeTitle} style={{border: '1px solid black', margin: '5px'}}/><br />
      내용 : <input type="text" onChange={handleChangeContents} style={{border: '1px solid black', margin: '5px'}}/>

      <button 
      onClick={handleSubmit}
      style={{ border: '1px solid green', padding: '10px', marginTop: '20px' }}>게시글작성하기</button>
    </div>
  );
};

export default StaticRoutingPage;
