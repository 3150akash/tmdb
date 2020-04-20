import React, { Component } from "react";
import { Alert } from 'reactstrap';

export default class ErrorBounderies extends Component {
    state = {
        gotError: false
    }

    static getDerivedStateFromError() {
        return true;
    }

    componentDidCatch() {
        console.log("some Error Occured")
    }

    render() {
        return this.state.gotError ? (
            <Alert color="danger">Some Error Has Occured...</Alert>
        ) : (this.props.children)
    }
}