import { action, extendObservable, observable } from 'mobx';
import jsonData from './data.json';

export class ExampleStore {
  @observable data = {};

  @action
  fetchData() {
    extendObservable(this.data, jsonData);
  }

  @action
  updateWindowTitle() {
    (this.data as any).widget.window.title = 'abc';
  }
}