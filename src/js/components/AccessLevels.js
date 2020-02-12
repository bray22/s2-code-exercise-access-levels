import React, { Component } from "react";
import { connect } from "react-redux";
import { saveLevel, setId } from "../actions/index";

const mapStateToProps = state => {
  return { accessLevels: state.accessLevels, currentId: state.currentId  };
};

function mapDispatchToProps(dispatch) {
  return {
    saveLevel: article =>
      dispatch(saveLevel(article)
    ),
    setId: id =>
      dispatch(setId(id)
    ),
  };
}

class ConnectedAccessLevels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      golf: false,
      accessLevels: props.accessLevels,
      current: props.currentId
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const {setId} = this.state;
    this.props.setId(event.target.id);
  }

  render() { 
    const { accessLevels } = this.state;
    return (
      <div class="leftPanel"> 
        <div class="table"> 
          <div class="table-row">
              <div class="table-head table-cell-left name-cell">Name</div>
              <div class="table-head reader-cell">Reader</div> 
              <div class="table-head reader-type-cell">Reader Type</div> 
          </div> 
          {accessLevels.map(el => (
              <div id={el.id} class="table-row" key={el.id}>
                <div id={el.id} class="table-cell table-cell-left name-cell" onClick={this.handleSubmit} key={el.id}>{el.name}</div>
                <div id={el.id} class="table-cell reader-cell" onClick={this.handleSubmit} key={el.id}>{el.readerName}</div> 
                <div id={el.id} class="table-cell reader-type-cell" onClick={this.handleSubmit}>{el.readerType}</div> 
              </div>
          ))}
        </div>
      </div>
    )
  }

};

const AccessLevels = connect(mapStateToProps, mapDispatchToProps)(ConnectedAccessLevels);

export default AccessLevels;