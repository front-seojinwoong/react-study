const App = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailError, setEmailError] = React.useState("");

  // 이벤트핸들러 함수(handleChangeEmail 형태로 만드는 회사도 많음)
  const onChangeEmail = (event) => {
    console.log(event.target); // 작동된 태그
    console.log(event.target.value); // 작동된 태그에 입력된 값
    setEmail(event.target.value);
  }
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  }
  const onClickSignup = (event) => {
    if (email.includes('@') === false) {
      setEmailError('이메일이 올바르지 않습니다! @가 없음!');
    } else {
      alert('회원가입을 축하합니다!');
    }
  }


  return (
    <div className="철수의App">
      이메일: <input type="text" onChange={onChangeEmail}/><br/>
      <div id="emailError">{emailError}</div>
      비밀번호: <input type="password" onChange={onChangePassword}/><br/>
      <div id="passwordError"></div>
      <button onClick={onClickSignup}>회원가입</button>
    </div>
  )
}