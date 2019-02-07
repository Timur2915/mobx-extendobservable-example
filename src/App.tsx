import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ExampleStore } from './store/ExampleStore';
import { observer } from 'mobx-react';
import { Param } from './Param';

@observer
class App extends Component {
  exampleStore = new ExampleStore();

  componentDidMount() {
    this.exampleStore.fetchData();
  }

  render() {
    console.log('render');

    let windowTitle = 'unknown';
    let windowParams = [];
    let imageParams = [];

    if (this.exampleStore && this.exampleStore.data) {
      const widget = (this.exampleStore.data as any).widget;
      if (widget) {
        windowTitle = widget.window.title;
        windowParams = widget.window.params;
        imageParams = widget.image.params;
      }
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>

          <p>Example field from data:</p>
          <p>data.widget.window.title: {windowTitle}</p>

          <button onClick={() => this.exampleStore.updateWindowTitle()}>
            Update data.widget.window.title
          </button>

          <br />

          <p>Example array render from data:</p>
          <p>data.widget.window.params</p>

          {windowParams.map((item: any, index: any) =>
            <Param key={index} name={item.name} visible={item.visible} /> )}

          <button onClick={() => this.exampleStore.updateParamsVisibility()}>
            Change random params visibility
          </button>

          <br />

          <p>Example array render from data:</p>
          <p>data.widget.image.params</p>

          {imageParams.map((item: any, index: any) =>
            <Param key={index} name={item.name} visible={item.visible} /> )}

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
