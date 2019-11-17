import React, { Component } from 'react';
import { connect } from 'react-redux';

class Step4Client extends Component {

    componentDidMount(){
        this.props.dispatch({type: 'GET_ACCEPTED_OFFER', payload: {userStepId: this.props.userStepId}})
    }

    render() {
        return (
            <div>
                {this.props.offerAccepted.loading ? 
                    <p>...loading...</p> 
                :
                    <>
                        {this.props.offerAccepted.length === 0 ? 
                            <p>No offers have been accepted at this time.</p> 
                        :
                            <pre>{JSON.stringify(this.props.offerAccepted)}</pre>
                        }
                    </>
                } 
            </div>
        );
    }
}

const mapStateToProps = state => ({
    offerAccepted: state.offerAccepted,
});

export default connect(mapStateToProps)(Step4Client);