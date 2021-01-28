import React from 'react';
import { connect } from 'react-redux';

const UserList = props => {
  return (
    <div className="list-container">
      <span className="title-list">List Users</span>
      {props.dataUser.map((user, index) => (
        <div className="item-list" key={user.id}>
          <span>{`${index + 1}. `}</span>
          <span>{user.name}</span>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  dataUser: state.other.data
});

export default connect(mapStateToProps)(UserList);
