import React from "react";

class TeamContainer extends React.Component {

    handleChange = (e) => {
        const { target: { value, name } } = e;
        this.setState({
            [name]: value
        }, () => {console.table(this.state)});
    }

    render() {
        return this.props.children(this.handleChange);
    }
}

export default TeamContainer;