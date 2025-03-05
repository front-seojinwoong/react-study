import {useState} from "react";

interface IProfile {
    name: string;
    age: number | string;
    school: string;
    hobby?: string;
}

const TypeScriptStateExample = () => {
  // 타입추론
  const [age, setAge] = useState(12);

  // 타입명시
  const [school, setSchool] = useState<string>("");

  // 타입명시를 해야하는 상황
  const [profile, setProfile] = useState<IProfile>({
    name: "철수",
    age: 8,
    school: "학교초등학교"
  })
  

  return (

  )
};

export default TypeScriptStateExample;
