import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ExampleStore } from './store/ExampleStore';
import { observer } from 'mobx-react';

@observer
class App extends Component {
  exampleStore = new ExampleStore();

  componentDidMount() {
    this.exampleStore.fetchData();
  }

  render() {
    let windowTitle = 'unknown';
    if (this.exampleStore && this.exampleStore.data) {
      const widget = (this.exampleStore.data as any).widget;
      if (widget) {
        windowTitle = widget.window.title;
      }
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>

          <p>Example from data:</p>
          <p>data.widget.window.title: {windowTitle}</p>

          <button onClick={() => this.exampleStore.updateWindowTitle()}>
            Update data.widget.window.title
          </button>

          <br />

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
