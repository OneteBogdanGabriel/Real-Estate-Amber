import React from 'react';
import Header from "../common/header/Header";

const UserPage = (props) => {
    const {name, email} = props;

    return (
        <div className="content">
          <div className="body">
            <Header />
            <div>
                <div>
                    <label>Name</label>
                    <p>{name}</p>
                </div>
                <div>
                    <label>Email</label>
                    <p>{email}</p>
                </div>
            </div>
          </div>
        </div>
      );
}

export default UserPage;