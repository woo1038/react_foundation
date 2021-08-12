import React from 'react';

class AttendanceBook extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            students: [
                { id: 1, name: 'hello1' },
                { id: 2, name: 'hello2' },
                { id: 3, name: 'hello3' },
                { id: 4, name: 'hello4' },
                { id: 5, name: 'hello5' },
                { id: 6, name: 'hello6' },
                { id: 7, name: 'hello7' },
                { id: 8, name: 'hello8' },
                { id: 9, name: 'hello9' },
                { id: 10, name: 'hello10' },
            ]
        }
    }

    render() {
        var { students } = this.state;
        // const studentList = students.map((student) =>
        //     <li key={student.id}>{student.name}</li>
        // );

        return (
            <ul>
                {students.map((student) =>
                    <li key={student.id}>{student.name}</li>
                )}
            </ul>
        )
    }
}

export default AttendanceBook;