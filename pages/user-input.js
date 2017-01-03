import React from 'react';

class UserInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: ''
    };

    this.handleUserSubmit = this.handleUserSubmit.bind(this);

    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(evt) {
    this.setState({
      userName: evt.target.value
    });
  }

  handleUserSubmit(evt) {
    evt.preventDefault();
    this.props.onAddUser(this.state.userName);
    this.setState({
      userName: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleUserSubmit}>
        <input type="text" value={this.state.userName} onChange={this.handleUserInput} />
        <button type="submit">Add User</button>
      </form>
    );
  }
}

UserInput.propTypes = {
  onAddUser: React.PropTypes.func.isRequired
};

export default UserInput;
