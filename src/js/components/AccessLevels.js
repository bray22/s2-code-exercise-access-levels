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
      <div className="leftPanel"> 
        <div className="table"> 
          <div className="table-row">
              <div className="table-head table-cell-left name-cell">Name</div>
              <div className="table-head reader-cell">Reader</div> 
              <div className="table-head reader-type-cell">Reader Type</div> 
          </div> 
          {accessLevels.map(el => (
              <div name={el.id} className="table-row" key={el.id}>
                <div id={el.id} className="table-cell table-cell-left name-cell" onClick={this.handleSubmit}>{el.name}</div>
                <div id={el.id} className="table-cell reader-cell" onClick={this.handleSubmit}>{el.readerName}</div> 
                <div id={el.id} className="table-cell reader-type-cell" onClick={this.handleSubmit}>{el.readerType}</div>
              </div>
          ))}
        </div>
      </div>
    )
  }

};

const AccessLevels = connect(mapStateToProps, mapDispatchToProps)(ConnectedAccessLevels);

export default AccessLevels;