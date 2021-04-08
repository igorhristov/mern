import React from "react";
import Link from "next/link";
const ClientsPage = () => {
  const clients = [
    { id: "max", name: "maximil" },
    { id: "igor", name: "Igor" },
    { id: "leogals", name: "Legolas" },
  ];
  return (
    <div>
      <h1>Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
        <li>
          <Link href="/clients/draon">dragon</Link>
        </li>
        <li>
          <Link href="/clients/gandalf">Gandalf</Link>
        </li>

        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;
