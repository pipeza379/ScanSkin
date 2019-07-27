import React, { Component } from "react";
import firebase from "../../firebaseDB";
import "./popup.scss";
class PopUp extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      detail: ""
    };
  }

  createPopUp = () => {
    let show = this.state.show;
    console.log(show);
    if (show) {
      var { properties, name, img } = this.state.detail;
      return (
        <div className="modal" onClick={this.toggle.bind()}>
          <div className={`item-popup active`}>
            <img className="img-popup" src={img} alt="item" />
            <span className="title-popup">{name}</span>
            <p className="detail-popup">{properties}</p>
          </div>
          <div className={`overlay active`} />
        </div>
      );
    } else
      return (
        <div className="modal" onClick={this.toggle.bind()}>
          <div className={`item-popup`} />
          <div className={`overlay`} />
        </div>
      );
  };

  toggle = () => {
    if (!this.state.show) {
      let database = firebase.database().ref("allproducts");
      database.once("value").then(snapshot => {
        let id = this.props.data.id;
        let data = snapshot.child(`${id}`).val();
        console.log(id);
        console.log(data);
        this.setState({ show: !this.state.show, detail: data });
      });
    } else this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <div
        className="text-button"
        id={this.props.data.id}
        onClick={this.toggle.bind()}
      >
        {this.createPopUp()}
      </div>
    );
  }
}
export default PopUp;
