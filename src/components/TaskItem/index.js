import './index.css'

const TaskItem = props => {
  const {taskdetails} = props
  const {task, val} = taskdetails

  return (
    <li className="listItnme">
      <p>{task}</p>
      <p>{val}</p>
    </li>
  )
}

export default TaskItem
