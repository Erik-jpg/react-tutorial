import React, {Component} from 'react';
import Cap from './Cap';

const TableHeader = () => { ... }
const TableBody = () => { ... }

class Table extends Component {
    render() {
        const { characterData } = this.props;
        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData} />
           </table>
        )
    }
}

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

const TableBody = () => {
    return <tbody />
}



export default Table
