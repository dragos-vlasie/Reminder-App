import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addReminder, clearReminder} from '../actions'
import RenderReminders from './Reminders';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      dueDate: ''
    }
  }

  addReminder() {
    this.props.addReminder(this.state.text, this.state.dueDate)
  }

  render() {
    const { reminders } = this.props;
    return (
      <div className="App">
        <div className="col-md-6 container">
            <h1 className="title">
                Reminder Pro
            </h1>
            <div className="form-inline">
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="I have to..."
                        onChange={event => this.setState({text: event.target.value})}
                        />
                    <input
                      className="form-control"
                      type="datetime-local"
                      onChange = {event => this.setState({dueDate: event.target.value})}
                      />
                </div>
                <button 
                    type="button"
                    size="lg"
                    className="btn btn-success"
                    onClick={()=>this.addReminder()}>
                    Add Reminder
                </button>
            </div>
        </div>
        <RenderReminders reminders= {reminders}  />
        <div onClick={() => this.props.clearReminder()} className="btn btn-danger"> Clear reminders
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    reminders: state
  }
}

export default connect(mapStateToProps, {addReminder, clearReminder})(App);
