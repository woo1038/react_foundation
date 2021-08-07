import React from 'react';

const styles = {
  root: {
    width: '20%',
    margin: 'auto',
    marginTop: 16,
    padding: 16,
    textAlign: 'left',
    backgroundColor: 'white',
    borderRadius: 16
  },
  imageContainer: {
    display: 'inline-block',
    width: '50',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  commentContainer: {
    display: 'inline-block',
    marginLeft: 16,
    textAlign: 'left',
    verticalAlign: 'top'
  },
  nameText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '700'
  },
  contentText: {
    color: 'black',
    fontSize: 16
  }
}



class Comment extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(`${this.props.id} mount`);
  }
  componentDidUpdate() {
    console.log(`${this.props.id} update`);
  }
  componentWillUnmount() {
    console.log(`${this.props.id} unmount`);
  }


  render() {
    const { name, content } = this.props;

    return (
      <div style={styles.root}>
        <div style={styles.imageContainer}>
          <img 
              src="https://t4.ftcdn.net/jpg/02/32/44/81/360_F_232448172_R1bkR8CNR2PWIcFesZRiIA1yt2ZmOP2f.jpg"
              style={styles.image}/>
        </div>
        <div style={styles.commentContainer}>
          <div style={styles.nameText}>{name}</div>
          <div style={styles.contentText}>{content}</div>
        </div>
      </div>
    )
  }
}

export default Comment;