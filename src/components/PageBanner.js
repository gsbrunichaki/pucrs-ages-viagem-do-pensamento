import React, { Component } from "react";
import MainLabel from "./MainLabel";
import SubtitleLabel from "./SubtitleLabel";
import CardShow from "./CardShow";

export default class PageBanner extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  
  render() {
    return (
      <CardShow>
        <MainLabel>{this.props.title}</MainLabel>
        { this.props.subtitle && <SubtitleLabel> {this.props.subtitle} </SubtitleLabel>}
      </CardShow>
    );
  }
}
