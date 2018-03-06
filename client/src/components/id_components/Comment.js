import React, { Component } from "react";

export default class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boo: []
        };
    }

    componentDidMount() {
        let id = this.props.id;
        this.props.getComment(id);
    }

    render() {
        return (
            <div>
                <p>lkansfnhklnF;NDSH;KLHBSGBNADDSGslK;BHFKLJADBSBGDK.JASBDKJLFDSABFKJLDBDGKJBdskjb</p>
            </div>
        )
    }
}