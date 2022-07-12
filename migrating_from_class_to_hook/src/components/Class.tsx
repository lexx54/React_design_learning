import React, { Component } from 'react'
import axios from 'axios';

//types 
type Issue = {
  number: number,
  title: string,
  state: string,
}

type Props = {}
type State = { issues: Issue[] }

class ClassIssues extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      issues: []
    }
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/repos/ContentPI/ContentPI/issues')
      .then((res: any) => {
        this.setState({ issues: res.data })
      })
  }

  render() {
    const { issues = [] } = this.state;

    return (
      <>
        <h1>ContentPI Issues</h1>
        {
          issues.map((issue: Issue) => (
            <p key={issue.title}>
              <strong>#{issue.number}</strong>{' '}
              <a href={`https://github.com/ContentPI/ContentPI/issues/${issue.number}`} target="_blank" rel='noreferrer'>
                {issue.title}
              </a>
              {issue.state}
            </p>
          ))
        }
      </>
    )
  }
}

// const Class = () => {
//   return (
//     <div>Class</div>
//   )
// }

export default ClassIssues