import React, { Component } from "react";
import styled from "styled-components";

export default class Roomlist extends Component {
  render() {
    return (
      <RoomList key={this.props.id}>
        <RoomImg bg={this.props.roomImg}></RoomImg>
        <RoomTxt>
          <RoomTitle>
            <span>{this.props.type}</span>
            {this.props.price}
          </RoomTitle>
          <span>{this.props.floor}</span>
          <span>{this.props.size}</span>
          <TextWrap>{this.props.title}</TextWrap>
        </RoomTxt>
      </RoomList>
    );
  }
}

const RoomList = styled.li`
  width: 25%;
  padding: 5px;
  margin-left: 15px;
  margin-bottom: 50px;
  background-color: #fff;
  &:hover {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
  }
`;
const RoomTxt = styled.div`
  width: 100%;
  & span {
    margin-right: 5px;
  }
`;
const RoomImg = styled.div`
  width: 100%;
  height: 145px;
  margin-bottom: 12px;
  border-radius: 3px;
  background-image: url(${props => props.bg});
  background-size: cover;
`;
const RoomTitle = styled.h3`
  font-size: 22px;
  font-weight: 500;
  & span {
    margin-right: 5px;
  }
`;
const TextWrap = styled.div`
  width: 200px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
