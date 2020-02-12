import React from "react";
import AccessLevels from "./AccessLevels";
import { connect } from "react-redux";
import AccessForm from "./AccessForm";
import { getId } from "../actions/index";
const mapStateToProps = state => {
    return { accessLevels: state.accessLevels,
        currentId: state.currentId,
        currentLevel: state.currentLevel
     };
  };


export class App extends React.Component {
    constructor(props) {
        super(props);
        this.scrollbars = React.createRef();
        this.state = props;
        
       
    }

    


    componentDidMount() { 
       console.log(this.state);

       
    }

    componentDidUpdate() { 
       // console.log(this.state.currentId);
        //this.props.getId();
    }

    render() {
       
        return (
            <>
            <div className="level-access-wrapper">
                <div className="left-panel">
                    <h2>Access Levels</h2>
                    <AccessLevels />
                </div>
                <div className="right-panel">
                    <h2>Access Name</h2>
                    <div className="right-panel-form">
                        <AccessForm currentLevel={this.props.currentLevel} currentId={this.props.currentId} accessLevels={this.props.accessLevels} />
                    </div>
                </div>
            </div>
            </>
        );
       
    }
};

export default connect(
    mapStateToProps,
    { getId }
  )(App);