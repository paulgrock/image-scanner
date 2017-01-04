import React, {PropTypes} from 'react';
import 'isomorphic-fetch';
import Tesseract from 'tesseract.js';

import Line from './bill-line';
import UserInput from './user-input';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lines: [],
      recognitionProgress: 0,
      total: 0,
      unassignedTotal: 0,
      users: []
    };

    this.handleFileProcessing = this.handleFileProcessing.bind(this);
    this.handleDeleteLine = this.handleDeleteLine.bind(this);
    this.handleAddUser = this.handleAddUser.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleLinePriceChange = this.handleLinePriceChange.bind(this);
  }

  getLinePrice(line) {
    return line.words
                .filter((word) => !isNaN(Number(word.text)));
  }

  handleFileProcessing(evt) {
    const files = evt.currentTarget.files;
    if (files.length > 0) {
      // const formData = new FormData();
      // formData.append('file', files[0]);

      // fetch('/scanner', {
      //   method: 'POST',
      //   body: formData
      // })
      //   .then((res) => {
      //     return res.json();
      //   })
      //   .then((json) => {
      //     this.setState({
      //       words: json
      //     });
      //   })
      //   .catch((err) => console.error(err));
      Tesseract.recognize(files[0])
        .progress((message) => {
          if (message.status === 'recognizing text') {
            this.setState({
              recognitionProgress: message.progress
            });
          }
        })
        .then((result) => {
          let total = 0;
          const lines = result.lines.map((line, idx) => {
            const prices = this.getLinePrice(line);

            const price = prices[0] ? prices[0].text : '';

            total += Number(price);

            return {
              id: idx,
              text: line.text,
              choices: line.choices,
              confidence: line.confidence,
              baseline: line.baseline,
              bbox: line.bbox,
              price
            };
          });
          this.setState({
            lines,
            total,
            unassignedTotal: total
          });
        });
    }
  }

  handleLinePriceChange(id, newPrice) {
    const lines = this.state.lines.map((line) => {
      if (line.id === id) {
        line.price = newPrice;
      }
      return line;
    });

    this.setState({
      lines
    });
  }

  getAssignedTotal(users) {
    return users.reduce((prev, curr) => {
      return prev + curr.total;
    }, 0);
  }

  handleDeleteLine(id) {
    let total = 0;
    const lines = this.state.lines.filter((line) => {
      if (line.id !== id) {
        total += Number(line.price);
        return true;
      }
      return false;
    });

    const users = this.state.users.map((user) => {
      const newLines = user.lines.filter((line) => id !== line.id);
      return this.updateUser(user, newLines);
    });

    const assignedTotal = this.getAssignedTotal(users);

    this.setState({
      lines,
      total,
      users,
      unassignedTotal: total - assignedTotal
    });
  }

  handleAddUser(name) {
    const users = this.state.users.concat({
      name,
      total: 0,
      id: Math.random() * 1000,
      lines: []
    });
    this.setState({
      users
    });
  }

  calculateUserTotal(user) {
    return user.lines.reduce((prev, curr) => {
      return Number(prev) + Number(curr.price);
    }, 0);
  }

  updateUser(user, lines) {
    user = Object.assign({}, user, {
      lines
    });

    const newTotal = this.calculateUserTotal(user);
    return Object.assign({}, user, {
      total: newTotal
    });
  }

  handleUserChange(newUserId, oldUserId, line) {
    const users = this.state.users.map((user) => {
      if (user.id === newUserId) {
        const newLines = user.lines.concat(line);
        return this.updateUser(user, newLines);
      }

      if (user.id === oldUserId) {
        const newLines = user.lines.filter((userLine) => userLine.id !== line.id);
        return this.updateUser(user, newLines);
      }

      return user;
    });

    const assignedTotal = this.getAssignedTotal(users);

    this.setState({
      users,
      unassignedTotal: this.state.total - assignedTotal
    });
  }

  render() {
    const listOfLines = this.state.lines.map((line) => {
      return <Line key={`line-${line.id}`} line={line} onDelete={this.handleDeleteLine} users={this.state.users} onUpdateUser={this.handleUserChange} onPriceChange={this.handleLinePriceChange} />;
    });
    return (
      <div>
        <form action="/scanner" method="POST" encType="multipart/form-data">
          <input type="file" name="file" accept="image/*" onChange={this.handleFileProcessing} />
        </form>
        <h2>Users</h2>
        <table>
          <thead>
            <tr>
              <td>
                Friend
              </td>
              <td>
                Total
              </td>
            </tr>
            {
              this.state.users.map((user, idx) => {
                return (
                  <tr key={`${user.name}-${idx}`}>
                    <td>{user.name}</td>
                    <td>{user.total}</td>
                  </tr>
                );
              })
            }
            <tr>
              <td>Unassigned</td>
              <td>{this.state.unassignedTotal}</td>
            </tr>
          </thead>
        </table>
        <UserInput onAddUser={this.handleAddUser} />

        <h1>List of lines from the image</h1>
        {
          this.state.recognitionProgress > 0 &&
          <progress max="100" value={this.state.recognitionProgress * 100}/>
        }
        <ul>
          {listOfLines}
          <li>Total: {this.state.total}</li>
        </ul>
      </div>
    );
  }
}

export default Home;
