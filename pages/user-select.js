import React from 'react';

class UserSelect extends React.Component {
  defaultValue = 'unassigned';

  state = {
    selectedUserId: this.defaultValue
  }

  handleUserChange = (evt) => {
    let prevUserId;
    const selectedUserId = evt.target.value;
    if (this.state.selectedUserId !== this.defaultValue) {
      prevUserId = this.state.selectedUserId;
    }
    this.setState({
      selectedUserId
    });
    this.props.onUserChange(Number(selectedUserId), Number(prevUserId));
  }

  render() {
    return (
      <select onChange={this.handleUserChange} value={this.state.selectedUserId}>
        <option value={this.defaultValue}>Select User</option>
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
