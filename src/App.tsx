import { Component } from 'react'

import HelloWorld from './components/hello-world'

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
