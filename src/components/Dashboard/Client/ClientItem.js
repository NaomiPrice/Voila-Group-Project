import React, { Component } from 'react';
import { connect } from 'react-redux';

class ClientItem extends Component {
    editClient = () => {
        console.log('hello from the editClient');

    }
    render() {
        return (
            <div>
                <tr>
                    <td>{this.props.client.firstName}</td>
                    <td>{this.props.client.lastName}</td>
                    <td><button onClick={this.editClient}>Edit</button></td>
                </tr>
            </div>
        )
    }
}

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps)(ClientItem);