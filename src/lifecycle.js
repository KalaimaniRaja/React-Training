import React, { Component } from "react";
import ConstructorMethod from "./Mounting/constructorMethod";
import GetDerivedStateFromPropsMethod from "./Mounting/getDerivedStateFromPropsMethod";
import RenderMethod from "./Mounting/renderMethod";
import ComponentDidMountMethod from "./Mounting/componentDidMountMethod";
import ShouldComponentUpdateMethod from "./Updating/shouldComponentUpdateMethod";
import GetSnapshotBeforeUpdateMethod from "./Updating/getSnapshotBeforeUpdateMethod";
import ComponentDidUpdateMethod from "./Updating/componentDidUpdateMethod";
import ComponentWillUnmountMethod from "./Unmounting/componentWillUnmount";

class LifeCycle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Mounting</h1>
        <h2>constructor Method</h2>
        <ConstructorMethod />
        <h2>getDerivedStateFromProps Method</h2>
        <GetDerivedStateFromPropsMethod />
        <h2>render Method</h2>
        <RenderMethod />
        <h2>componentDidMount Method</h2>
        <ComponentDidMountMethod />
        <h1>Updating</h1>
        <h2>shouldComponentUpdate Method</h2>
        <ShouldComponentUpdateMethod />
        <h2>getSnapshotBeforeUpdate Method</h2>
        <GetSnapshotBeforeUpdateMethod />
        <h2>componentDidUpdate Method</h2>
        <ComponentDidUpdateMethod />
        <h1>Unmounting</h1>
        <h2>componentWillUnmount Method </h2>
        <ComponentWillUnmountMethod />
      </div>
    );
  }
}

export default LifeCycle;
