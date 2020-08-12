import React, { Component } from 'react';
import NotMatch from './NotMatch';

class User extends Component {
  render() {
    const path = this.props.match.params.user
    if (path.match('^[0-9]*$')) {
      return (
        <div>
          User profile page.
        </div>
      );
    }
    return <NotMatch></NotMatch>
  }
};

export default User;