import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { deleteReminder } from '../actions'

  const deleteThis = (id, props) => {
    console.log('id:', id);
    console.log('props:', props)
    props.deleteReminder(id)
  }

const RenderReminders = (props) =>{
    const { reminders } = props;
    return (
      <ul className="list-group col-sm-4 col-md-6">
      {
        reminders.map(reminder => {
          return (
            <li key={reminder.id} className="list-group-item to-do-item">
              <div>{reminder.text}</div>
              <div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
              <div 
                className="list-item delete-button"
                onClick={() => deleteThis(reminder.id, props)}
              >
                &#x2715;
              </div>
            </li>
          )
        })
      }
      </ul>
    )
  }

  export default connect(null, {deleteReminder})(RenderReminders)