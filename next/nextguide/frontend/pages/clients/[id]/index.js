import React from "react";
import { useRouter } from "next/router";

const ClientProjectsPage = () => {
  const router = useRouter();
  console.log(router.query);
  function loadProjectHandler() {
    // load data
    // router.push('/clients/max/projcetA');
    //alternative way
    router.push({
        pathname :'/clients/[id]/[clientprojectid]',
        query: {id:'max', clientprojectid:"projectb"}
    })
  }
  return (
    <div>
      <h1>Projects of a give Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientProjectsPage;
