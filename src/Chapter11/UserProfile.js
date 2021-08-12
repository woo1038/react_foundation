import React from 'react';

function FancyBorder(props) {
    console.log(props.children);
    return (
        <div style={Object.assign(props.style, {
            display: 'inline-block',
            border: '2px solid #80d900',
            borderRadius: 16,
            textAlign: 'center',
            overflow: 'hidden' })}>
            <div style={{
                padding: 8,
                backgroundColor: '#80d900',}}>
                    <span style={{ fontSize: 16 }}>
                        {props.title}
                    </span>
                </div>
            <div style={{ marginTop: 8 }}>
                {props.children}
            </div>
        </div>
    )
}

const styles = {
    imageContainer: {
        width: 50,
        margin: 'auto'
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    jobContainer: {
        padding: 8
    },
    jobText: {
        fontSize: 16
    }
}

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { user } = this.props;

        return (
            <FancyBorder
                title={user.name}
                style={{width: '200px', margin: 4}}>
                <div style={styles.imageContainer}>
                    <img
                        src={user.image} 
                        style={styles.image} />
                </div>
                <div style={styles.jobContainer}>
                    <span style={styles.jobText}>
                        {user.job}
                    </span>
                </div>
            </FancyBorder>
        )
    }
}

export default UserProfile;