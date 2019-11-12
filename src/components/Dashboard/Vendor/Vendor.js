import React, { Component } from 'react';
import { connect } from 'react-redux';
import VendorItem from './VendorItem';

class Vendor extends Component {
    componentDidMount() {
        // use component did mount to dispatch an action to request the vendor list from the API
        this.getVendor();
    }
    getVendor() {
        this.props.dispatch({ type: 'FETCH_VENDOR' })
    }
    addVendor() {
        console.log('hello from the addVendor button');

    }
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Company Name</th>
                            <th>Vendor Type</th>
                            <th>Contact Number</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.state.vendorList.map((vendor) => {
                            return (
                                <VendorItem key={vendor.id} vendor={vendor} getVendor={this.getVendor} />
                            )
                        })}
                    </tbody>
                </table>
                <div>
                    <button onClick={this.addVendor}>Add Vendor</button>
                </div>
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

export default connect(mapStateToProps)(Vendor);