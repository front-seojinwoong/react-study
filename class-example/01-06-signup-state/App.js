const App = () => {
  const [email, setEmail] = React.useState('');
  const [passWord, setPassWord] = React.useState('');
  const [emailError, setEmailError] = React.useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handlePassword = (e) => {
    setPassWord(e.target.value);
  }
  const handleSubmit = () => {
    if (!email.includes('@')) {
      setEmailError('이메일이 올바르지 않습니다! @가 없음!');
    } else {
      alert('회원가입을 축하합니다');
    }
  }

  return (
    <div className="철수의App">
      이메일: <input type='text' onChange={handleEmail}/><br/>
      <div id="emailError">{emailError}</div>
      비밀번호: <input type='password' onChange={handlePassword}/><br/>
      <button onClick={handleSubmit}>회원가입</button>
    </div>
  )
}