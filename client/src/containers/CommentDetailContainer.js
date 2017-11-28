import CommentDetail from '../CommentDetail';
import { connect } from 'react-redux';



function mapStateToProps(state){
    return {
        comment: state.comments
    }
}

export default connect(mapStateToProps)(CommentDetail);