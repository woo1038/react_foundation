import logo from './logo.svg';
import './App.css';
import Comment from './Comment';
import React from 'react';

const commentsFromServer= [
  {id: 1, name: 'hello', content: 'world'},
  {id: 2, name: '리액트', content: '신기'},
  {id: 3, name: '이렇게', content: '와우'},
];

var timer;

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      comments: []
      // comments: [
      //   {id: 1, name: 'hello', content: 'world'},
      //   {id: 2, name: '리액트', content: '신기'},
      //   {id: 3, name: '이렇게', content: '와우'},
      // ],
    };
  }

  componentDidMount() {
    let comments = this.state.comments;

    timer = setInterval(() => {
      // if(comments.length > 0) {
      //   comments.pop();
      //   this.setState({
      //     comments: comments
      //   })
      // }
      if(comments.length < commentsFromServer.length) {
        let index = comments.length;
        comments.push(commentsFromServer[index]);
        this.setState({
          comments: comments
        })
      } 
      else if (timer) {
        clearInterval(timer);
      }
    }, 1000);
  }

  render() {
    const { comments } = this.state;

    return (
      <div>
        {comments.map((comment, i) => {
          return (
            <Comment
              key={comment.id}
              id={comment.id}
              name={comment.name}
              content={comment.content} />
          )
        })}
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App" style={{padding: 16, backgroundColor: '#e5e5e5'}}>
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <div>
//         {comments.map((c, i) => {
//           return (
//             <Comment
//               name={c.name}
//               content={c.content} />
//           )
//         })}
//       </div>
//     </div>
//   );
// }

export default App;
