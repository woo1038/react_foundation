import React from 'react';
import UserProfile from './UserProfile';

class UserProfileList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [
                { id: 1, name:'hello1', image:"https://image.shutterstock.com/image-vector/user-login-authenticate-icon-human-260nw-1365533969.jpg", job: 'world1'},
                { id: 2, name:'hello2', image:"https://image.shutterstock.com/image-vector/user-login-authenticate-icon-human-260nw-1365533969.jpg", job: 'world2'},
                { id: 3, name:'hello3', image:"https://image.shutterstock.com/image-vector/user-login-authenticate-icon-human-260nw-1365533969.jpg", job: 'world3'},
                { id: 4, name:'hello4', image:"https://image.shutterstock.com/image-vector/user-login-authenticate-icon-human-260nw-1365533969.jpg", job: 'world4'},
                { id: 5, name:'hello5', image:"https://image.shutterstock.com/image-vector/user-login-authenticate-icon-human-260nw-1365533969.jpg", job: 'world5'},
                { id: 6, name:'hello6', image:"https://image.shutterstock.com/image-vector/user-login-authenticate-icon-human-260nw-1365533969.jpg", job: 'world6'},
                { id: 7, name:'hello7', image:"https://image.shutterstock.com/image-vector/user-login-authenticate-icon-human-260nw-1365533969.jpg", job: 'world7'},
            ]
        }
    }

    render() {
        const { users } = this.state;
        return (
            <div>
                {users.map((user) => {
                    return (
                        <UserProfile
                            ket={user.id}
                            user={user} />
                    )
                })}
            </div>
        )
    }
}

export default UserProfileList;