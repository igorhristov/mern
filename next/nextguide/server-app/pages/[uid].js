import React from "react";

const UserIdPage = (props) => {
  return <>{props.id}</>;
};

export default UserIdPage;

export async function getServerSideProps(context) {
  const { params } = context;

  const userId = params.uid;
console.log("server side")
  return {
    props: {
      id: "userid-" + userId,
    },
  };
}
