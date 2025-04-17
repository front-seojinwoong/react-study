"use client";

import { Component } from "react";

export default class ClassCounterPage extends Component {
  state = {
    count: 1,
  };

  // 해결방법1) 화살표 함수
  handleUpCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <>
        <div>{this.state.count}</div>
        {/* <button onClick={this.handleUpCount.bind(this)}>  // 해결방법2) 로직상의 this를 연결(.bind)
          카운트 올리는 버튼2
        </button> */}
        <button onClick={this.handleUpCount}>카운트 올리는 버튼2</button>
      </>
    );
  }
}
