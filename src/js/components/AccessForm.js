import React, { Component } from "react";
import { connect } from "react-redux";
import { saveLevel } from "../actions/index";
import { READERS } from "../constants/readers";
import '../../App.css';
function mapDispatchToProps(dispatch) {
  return {
    saveLevel: level => dispatch(saveLevel(level))
  };
}



class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.inputName = React.createRef();
    this.inputDescription = React.createRef();
    this.inputReader = React.createRef();
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeReader = this.handleChangeReader.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps (newProps) {
    console.log(newProps);
    try {
    this.inputName.value = newProps.currentLevel.name;
    this.inputDescription.value = newProps.currentLevel.Description;
    this.inputReader.value = newProps.currentLevel.readerId;
    } catch {
      
    }
   // if( newProps.profileImage !== this.props.profileImage ) /* do stuff */
  }

  handleChangeName(event) {
    this.inputName.value = event.target.value;
    console.log(this.inputName.value);
  }

  handleChangeDescription(event) {
    this.inputDescription.value = event.target.value;
    console.log(this.inputDescription.value);
  }

  handleChangeReader(event) {
    this.inputReader.value = event.target.value;
    console.log(this.inputReader.value);
  }


  handleSubmit() {
   // event.preventDefault();

    const { title } = this.props;
    const inputs = {};


    //console.log(this.props);
    inputs.id = this.props.currentId;
    inputs.name = this.inputName.value;
    inputs.Description = this.inputDescription.value;
    inputs.readerId = parseInt(this.inputReader.value);
    console.log('inputs');
    console.log(inputs);
    
    this.props.saveLevel(inputs);
    
    
  }
  render() {
    const selected = READERS.map(function(reader, index) {
      return <option value={reader.id}>{reader.name}</option>
    });
    const readerSelect = 
      <select 
        onChange={this.handleChangeReader}
        ref={(userInput) => this.inputReader = userInput}
        defaultValue={this.props.currentLevel.readerId}>
        <option value="0">All Readers</option>
        {selected}
      </select>
      
    return (
      <>
        <div class="levelForm">
          <div class="form-row">
            <div class="field-name">Name:</div>
            <div class="field-wrapper">
              <input
                type="text"
                ref={(userInput) => this.inputName = userInput}
                onChange={this.handleChangeName}
                defaultValue={this.props.currentLevel.name}
              />
            </div>
          </div>
          <div class="form-row">
            <div class="field-name">Description:</div>
              <div class="field-wrapper">
                <textarea
                  type="text"
                  ref={(userInput) => this.inputDescription = userInput}
                  onChange={this.handleChangeDescription}>
                    {this.props.currentLevel.Description}
                </textarea>
              </div>
          </div>
          <div class="form-row">
            <div class="field-name">Reader(s):</div>
            <div class="field-wrapper">
              {readerSelect}
            </div>
          </div>
          <div class="form-row">
            <button type="submit" onClick={this.handleSubmit}>Save</button>
            <button type="submit" onClick={this.handleSubmit}>Cancel</button>
          </div>
        </div>
      </>
    );
  }
}

const AccessForm = connect(
  null,
  mapDispatchToProps,
)(ConnectedForm);

export default AccessForm;