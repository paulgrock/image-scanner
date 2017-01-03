import React from 'react';

class UserSelect extends React.Component {
  constructor(props) {
    super(props);

    this.defaultValue = 'select-user';

    this.state = {
      selectedUserId: this.defaultValue
    };

    this.handleUserChange = this.handleUserChange.bind(this);
  }

  handleUserChange(evt) {
    let prevUserId = this.state.selectedUserId;
    if (evt.target.value === this.defaultValue) {
      this.setState({
        selectedUserId: this.defaultValue
      });
      return;
    }
    if (this.state.selectedUserId === this.defaultValue) {
      prevUserId = undefined;
    }
    const selectedUserId = evt.target.value;
    this.setState({
      selectedUserId
    });
    this.props.onUserChange(Number(selectedUserId), Number(prevUserId));
  }

  render() {
    return (
      <select onChange={this.handleUserChange} value={this.state.selectedUserId}>
        <option value="select-user">Select User</option>
        {this.props.users.map((user) => <option key={user.id} value={user.id}>{user.name}</option>)}
      </select>
    );
  }
}

UserSelect.propTypes = {
  users: React.PropTypes.array,
  onUserChange: React.PropTypes.func.isRequired
};

export default UserSelect;
