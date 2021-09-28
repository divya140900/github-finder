import React from "react";

const Useritem = (props) => {
  const { login, avatar_url, html_url } = props.user;
  return (
    <div className="card text-center">
      <img
        className="round-img"
        src={avatar_url}
        alt="userimg"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        <a className="btn btn-dark btn-sm my-1" href={html_url}>
          More
        </a>
      </div>
    </div>
  );
};

export default Useritem;
