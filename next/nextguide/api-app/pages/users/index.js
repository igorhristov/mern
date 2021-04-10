import React, { useState } from "react";

import { buildFeedbackPath, extractFeedback } from "../api/feedback/index";

const UsersPage = (props) => {
  const [userDetails, setUserDetails] = useState();

  function loadFeedbackHandler(id) {
    fetch(`/api/feedback/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUserDetails(data.feedback);
      });
  }

  return (
    <>
      {userDetails && (
        <p>
          {userDetails.name} : {userDetails.email}
        </p>
      )}
      <div>
        {props.feedbackItems.map((item) => (
          <li key={item.id}>
            {item.text}{" "}
            <button onClick={loadFeedbackHandler.bind(null, item.id)}>
              Show Details
            </button>
          </li>
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  return {
    props: {
      feedbackItems: data,
    },
  };
}

export default UsersPage;
