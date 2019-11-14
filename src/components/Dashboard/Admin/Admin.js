import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminItem from './AdminItem'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';


// const styles = theme => ({
//     root: {
//         backgroundColor: theme.palette.background.paper,
//         width: 500,
//         position: 'relative',
//         minHeight: 200,
//     },
//     fab: {
//         position: 'absolute',
//         bottom: theme.spacing(2),
//         right: theme.spacing(2),
//     },


// });

class Admin extends Component {

    componentDidMount() {
        // use component did mount to dispatch an action to request the vendor list from the API
        console.log('this will dispatch an action to request vendor list from api');
        this.getAdmin();
    }
    getAdmin() {
        this.props.dispatch({ type: 'FETCH_ADMIN' })
    }
    addAdmin() {
        console.log('hello from the addAdmin button');

    }
    render() {
        // const { classes } = this.props;
        return (
            <div>
                <table>
                    <thead>
                        <tr>

                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email </th>
                            <th>Role</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.state.adminList.map((admin) => {
                            return (
                                <AdminItem key={admin.id} admin={admin} getAdmin={this.getAdmin} />
                            )
                        })}
                    </tbody>
                </table>
                {/* <Fab color="primary" aria-label="add" className={classes.fab}>
                    <AddIcon onClick={this.addAdmin} />
                </Fab> */}
                <button onClick={this.addAdmin}>Add Admin</button>

            </div>
        )
    }
}

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
    user: state.user,
    state
});

export default connect(mapStateToProps)(Admin);

// withStyles(styles)