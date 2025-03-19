import { useState } from "react";

const CreateBoard = () => {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [writerError, setWriterError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [contentError, setContentError] = useState(false);

  const handleChangeWriter = (e) => {
    setWriter(e.target.value);
    setWriterError(false);
  };
  const handleChangePwd = (e) => {
    setPassword(e.target.value);
    setPasswordError(false);
  };
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
    setTitleError(false);
  };
  const handleChangeContent = (e) => {
    setContent(e.target.value);
    setContentError(false);
  };
  const handleChangeSubmit = () => {
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
    if (!content) {
      setContentError(true);
      return false;
    }
  };

  return (
    <div className='onLayout subPage'>
      <div className='onContainer'>
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
              {writerError && (
                <p className='errorMsg'>필수값을 입력해주세요.</p>
              )}
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
                onChange={handleChangeContent}
              ></textarea>
              {contentError && (
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
      </div>
    </div>
  );
};

export default CreateBoard;
