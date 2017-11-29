import Comment from '../components/Comment';
import { connect } from 'react-redux'
import { getComment } from '../actions'



function mapStateToProps(state){
    return {
        comment: state.comments
    }
}

function mapDispatchToProps(dispatch){
    return {
        getComment: function(id){
            dispatch(getComment(id));
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Comment);
