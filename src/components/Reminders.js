import React from 'react'
import moment from 'moment'

  const deleteReminder = (id, props) => {
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
                onClick={() => deleteReminder(reminder.id)}
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

export default RenderReminders