"use client";

import Link from "next/link";
import { Component } from "react";

export default class ClassCounterPage extends Component {
  state = {
    count: 1,
  };

  componentDidMount() {
    console.log("그려지고 나서 실행!!");
    // 예) API 요청, 인풋 포커스 깜빡깜빡 등
  }

  componentDidUpdate() {
    console.log("변경되고 나서 실행!");
  }

  componentWillUnmount() {
    console.log("사라지기 전에 실행!");
    // 예) 채팅방 나가기 API 요청, 불필요한 타이머 삭제 등 (청소하기)
  }

  handleUpCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.handleUpCount}>카운트 올리는 버튼2</button>

        <Link href={"/"}>나가기</Link>
      </>
    );
  }
}
