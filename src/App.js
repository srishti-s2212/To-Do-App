import React from 'react';
import "./App.css";

{/*}
function App() {
  return (
    <h1>React App Test h1</h1>
  );
};
export default App;

*/}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newItem: "",
      list: []
    }
  }

  addItem(todoValue) {
    if (todoValue !== " ") {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false,
      }
      const list = [...this.state.list]
      list.push(newItem);
      this.setState({
        list,
        newItem: ""
      })
    }
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedlist = list.filter(item => item.id !== id);
    this.setState({ list: updatedlist })
  }

  updateInput(input) {
    this.setState({ newItem: input })
  }

  render() {
    return (

      //<h1> My To-Do App</h1>
      <div classname="container">
        <h1 className="app-title">My To-Do App</h1>
        <br />
        <input
          className="input-text"
          type="text"
          placeholder="Write a to do"
          required
          value={this.state.newItem}
          onChange={e => this.updateInput(e.target.value)}
        />
        <button
          className="add-btn"
          onClick={() => this.addItem(this.state.newItem)}
          disable={!this.state.newItem.length}
        >Add to do</button>
        <div className="list">
          <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  <input
                    type="checkbox"
                    name="isDone"
                    checked={item.isDone}
                    onChange={() => { }}
                  //id=""
                  />
                  {item.value}
                  <button
                    classname="btn"
                    onClick={() => this.deleteItem(item.id)}
                  >Delete</button>
                </li>
              )
            })}
            <li>
              <input
                type="checkbox"
                name=""
                id=""
              />
              <button classname="btn">Default To Do item</button>
            </li>
          </ul>
        </div>
      </div>
    )

  }
}

export default App;
