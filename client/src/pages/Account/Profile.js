import React from 'react';

const Profile = (props) => {

return (

<div className="row">
  <div className="col-lg-6">
    <h3 className="itemTitle">Suggested Items?</h3>
    <div className="availableList">
      Suggested Items based on age
  </div>
  </div>
  
  <div className="col-lg-6">
    <h3 className="itemTitle">Select Items to Return:</h3>

    <div className="rentedList">
    <h1> items that I currently have rented </h1>
  </div>
</div>
</div>
)
}

export default Profile;