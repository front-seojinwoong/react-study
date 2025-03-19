"use client";

import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

const BoardCreatePage = () => {
  const [createBoard] = useMutation(CREATE_BOARD);
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [writerError, setWriterError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [contentsError, setContentsError] = useState(false);

  const handleChangeWriter = (e: ChangeEvent<HTMLInputElement>) => {
    setWriter(e.target.value);
    setWriterError(false);
  };
  const handleChangePwd = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setPasswordError(false);
  };
  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    setTitleError(false);
  };
  const handleChangeContents = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(e.target.value);
    setContentsError(false);
  };
  const handleChangeSubmit = async () => {
    if (!writer) {
      setWriterError(true);
      return false;
    }
    if (!password) {
      setPasswordError(true);
      return false;
    }
    if (!title) {
      setTitleError(true);
      return false;
    }
    if (!contents) {
      setContentsError(true);
      return false;
    }

    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer,
            password,
            title,
            contents,
          },
        },
      });
      alert("게시글 등록 완료!");
      router.push(`/board/${result.data.createBoard._id}`);
    } catch (error) {
      alert("게시글 등록 과정 중 오류가 발생했습니다!");
      console.error("BoardCreatePage.tsx ===", error.message);
    }
  };

  return (
    <>
      <h2 className='onT2'>게시글 등록</h2>

      <div className='onFlexBox hasLine'>
        <div className='onInputWrap'>
          <label>
            <p className='onInputTit'>
              <span className='hidden'>필수</span>
              <span className='required'>작성자</span>
            </p>
            <input
              type='text'
              className='onInput'
              placeholder='작성자 명을 입력해주세요.'
              onChange={handleChangeWriter}
            />
            {writerError && <p className='errorMsg'>필수값을 입력해주세요.</p>}
          </label>
        </div>
        <div className='onInputWrap'>
          <label>
            <p className='onInputTit'>
              <span className='hidden'>필수</span>
              <span className='required'>비밀번호</span>
            </p>
            <input
              type='password'
              className='onInput'
              placeholder='비밀번호를 입력해주세요.'
              onChange={handleChangePwd}
            />
            {passwordError && (
              <p className='errorMsg'>필수값을 입력해주세요.</p>
            )}
          </label>
        </div>
      </div>

      <div className='onFlexBox hasLine'>
        <div className='onInputWrap'>
          <label>
            <p className='onInputTit'>
              <span className='hidden'>필수</span>
              <span className='required'>제목</span>
            </p>
            <input
              type='text'
              className='onInput'
              placeholder='제목을 입력해 주세요.'
              onChange={handleChangeTitle}
            />
            {titleError && <p className='errorMsg'>필수값을 입력해주세요.</p>}
          </label>
        </div>
      </div>

      <div className='onFlexBox hasLine'>
        <div className='onInputWrap'>
          <label>
            <p className='onInputTit'>
              <span className='hidden'>필수</span>
              <span className='required'>내용</span>
            </p>
            <textarea
              className='onInput'
              placeholder='내용을 입력해 주세요.'
              onChange={handleChangeContents}
            ></textarea>
            {contentsError && (
              <p className='errorMsg'>필수값을 입력해주세요.</p>
            )}
          </label>
        </div>
      </div>

      <div className='btnGroup ta-r'>
        <button className='btnS_line'>취소</button>
        <button className='btnS_blue' onClick={handleChangeSubmit}>
          등록하기
        </button>
      </div>
    </>
  );
};

export default BoardCreatePage;
