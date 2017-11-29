import Contact from '../components/Contact';
import { connect } from 'react-redux';
import { getContact } from '../actions'



function mapStateToProps(state){
    return {
        contact: state.contacts
    }
}

function mapDispatchToProps(dispatch){
    return {
        getContact: function(id){
            let action = getContact(id);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);