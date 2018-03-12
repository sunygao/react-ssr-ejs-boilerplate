import React, { Component } from "react";
import {ENTERING, ENTERED, EXITING, EXITED} from 'react-transition-group/Transition';

const TransitionHook = ChildComponent => class TransitionHook
 extends Component {

   constructor(props) {
    super(props);

      this.timerShow = null;
      this.child = null;
      this.isShown = false;

    console.log(this.props.status);
 }

  componentDidMount() {
    this.animate();
  }

  componentDidUpdate(prevProps, prevState) {
   // console.log('did update', this.props.status);
    // console.log('shown', this.state.isShown);
    if ((prevProps.status !== this.props.status) && this.child) this.animate();
  }

  animate() {
    let hash = window.location.hash;
    if (this.props.location.hash) hash = this.props.location;

    if (hash) return;
    //console.log('animate', this.props.status);
    // console.log('this.props.match == prev', this.child, this.state.isShown, this.props.status, prevProps.status);
    // console.log('this.props.status', this.props.status);
    switch (this.props.status) {
      case ENTERING: this._onEntering(); break;
      case ENTERED: !this.isShown ? this._onEntering() : this._onEntered(); break;
      case EXITING: this._onExiting(); break;
      case EXITED: this._onExited(); break;
      default: break;
    }
  }

    // Show
  _onEntering() {
    if (this.isShown) return;
    if (this.child && this.child.onEntering) this.child.onEntering();
    this.isShown = true;
  }

  // Shown
  _onEntered() {
    this.isShown = true;
    if (this.child && this.child.onEntered) this.child.onEntered();
  }

  // Hide
  _onExiting() {
    if (!this.isShown) return;

    if (this.timerShow)  window.clearTimeout(this.timerShow);
    if (this.child && this.child.onExiting) this.child.onExiting();
  }

  // Hidden
  _onExited() {
    if (this.timerShow) window.clearTimeout(this.timerShow);
    this.timerShow = null;

    this.isShown = false;

    if (this.child && this.child.onExited) this.child.onExited();

  }

  render() {
    //console.log(this.props);
    return (
     <ChildComponent {...this.props} ref={instance => this.child = instance}
            onEntering={() => {}}
            onEntered={() => {}}
            onExiting={() => {}}
            onExited={() => {}}
          />
    );
   }
};
export default TransitionHook;