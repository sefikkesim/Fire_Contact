import React from "react";
import { Table } from "semantic-ui-react";
const Contact = () => {
  return (
    <div>
      <h2 className="contact-header">Contacts</h2>
      <Table size={"large"} className="table">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign="center">Username</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Phone Number</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">
              E-mail address
            </Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Delete</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Edit</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
      </Table>
    </div>
  );
};

export default Contact;
