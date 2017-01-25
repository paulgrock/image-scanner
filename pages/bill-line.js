import React from 'react';
import UserSelect from './user-select';

class Line extends React.Component {
  state = {
      price: this.props.line.price
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.line.price !== nextProps.line.price && this.state.belongsToId !== 'select-user') {
      this.props.onUpdateUser(this.state.belongsToId, undefined, this.props.line);
    }
  }

  handleDelete = () => {
    this.props.onDelete(this.props.line.id);
  }

  handlePriceChange = (evt) => {
    this.setState({
      price: evt.target.value
    });
    this.props.onPriceChange(this.props.line.id, evt.target.value);
  }

  handleUserChange = (userId, previousUserId) => {
    this.setState({
      belongsToId: userId
    });
    this.props.onUpdateUser(userId, previousUserId, this.props.line);
  }

  render() {
    const {line} = this.props;
    return (
      <li>
        <button className="btn btn--delete" onClick={this.handleDelete}>-</button>
        {line.text}
        {
          this.state.price ?
            <input type="text" value={this.state.price} onChange={this.handlePriceChange} /> :
            null
        }
        {
          this.props.users.length && this.state.price ?
            <UserSelect users={this.props.users} onUserChange={this.handleUserChange} /> :
            null
        }
      </li>
    );
  }

}

Line.propTypes = {
  line: React.PropTypes.object.isRequired,
  onDelete: React.PropTypes.func.isRequired,
  users: React.PropTypes.array,
  onUpdateUser: React.PropTypes.func.isRequired,
  onPriceChange: React.PropTypes.func.isRequired
};

export default Line;
