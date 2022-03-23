import { Component } from 'react'

import HelloWorld from './components/helloWorld'

class App extends Component {
  constructor(props: any) {
    super(props)
    this.state = {}
  }

  render(): JSX.Element {
    return <HelloWorld title="Hello from React webpack" />
  }
}

export default App
