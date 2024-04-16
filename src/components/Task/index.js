import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Options from '../options'
import Tags from '../ButtonItem'
import TaskItem from '../TaskItem'
import './index.css'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class Task extends Component {
  state = {
    taskList: [],
    taskuser: '',
    selectId: tagsList[0].optionId,
    isAnyTabActive: false,
    activeRender: [],
  }

  onTask = event => {
    this.setState({taskuser: event.target.value})
  }

  onselectId = event => {
    this.setState({selectId: event.target.value})
  }

  changeActiveId = id => {
    const {taskList} = this.state
    const update = taskList.filter(eachItem => eachItem.id === id)
    this.setState({activeRender: update, isAnyTabActive: true})
  }

  Onadd = event => {
    event.preventDefault()
    const {taskuser, selectId} = this.state
    const obj = {id: uuidv4(), task: taskuser, val: selectId}

    this.setState(preState => ({
      taskList: [...preState.taskList, obj],
      taskuser: '',
      selectId: 'HEALTH',
    }))
  }

  render() {
    const {
      taskList,
      taskuser,
      selectId,
      isAnyTabActive,
      activeRender,
    } = this.state

    return (
      <div className="mainbg">
        <div className="formCard">
          <form>
            <h1>Create a task!</h1>
            <label htmlFor="task">Task</label> <br />
            <input
              type="text"
              id="task"
              placeholder="Enter the task here"
              onChange={this.onTask}
              value={taskuser}
            />{' '}
            <br />
            <label htmlFor="tag">Tags</label> <br />
            <select onChange={this.onselectId} value={selectId} id="tag">
              {tagsList.map(each => (
                <Options optionDetails={each} key={each.optionId} />
              ))}
            </select>{' '}
            <br />
            <button onClick={this.Onadd} type="submit">
              Add Task
            </button>
          </form>
        </div>
        <div className="formCard">
          <div>
            <h1>Tags</h1>
            <ul className="tagCard">
              {tagsList.map(eachItem => (
                <Tags
                  key={eachItem.optionId}
                  tagDetails={eachItem}
                  changeActiveId={this.changeActiveId}
                />
              ))}
            </ul>
          </div>
          {isAnyTabActive ? (
            <div>
              <h1>Tasks</h1>
              {activeRender.length === 0 ? (
                <p>No Tasks Added Yet</p>
              ) : (
                <div>
                  <ul type="none">
                    {activeRender.map(each => (
                      <TaskItem taskdetails={each} key={each.id} />
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <div>
              <h1>Tasks</h1>
              {taskList.length === 0 ? (
                <p>No Tasks Added Yet</p>
              ) : (
                <div>
                  <ul type="none">
                    {taskList.map(each => (
                      <TaskItem
                        taskdetails={each}
                        key={each.id}
                        selectId={selectId}
                      />
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default Task
