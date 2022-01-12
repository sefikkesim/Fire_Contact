import React from "react";
import { Table, Icon } from "semantic-ui-react";
import { useFetch } from "../utils/functions";
const Contact = () => {
  const { isLoading, contacts } = useFetch();
  console.log(contacts);
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
        <Table.Body>
          {isLoading ? (
            <Table.Row>
              <Table.Cell colSpan={5} textAlign="center">
                <p>Loading...</p>
              </Table.Cell>
            </Table.Row>
          ) : contacts?.length === 0 ? (
            <Table.Row>
              <Table.Cell colSpan={5} textAlign="center">
                <p className="nothing-found">Nothing Found</p>
              </Table.Cell>
            </Table.Row>
          ) : (
            contacts?.map((contact, index) => (
              <Table.Row key={index}>
                <Table.Cell textAlign="center">
                  {contact.username.toUpperCase()}
                </Table.Cell>
                <Table.Cell textAlign="center">
                  {contact.phoneNumber}
                </Table.Cell>
                <Table.Cell textAlign="center">{contact.gender}</Table.Cell>
                <Table.Cell
                  textAlign="center"
                  className="delete"
                  onClick={null}
                >
                  <Icon name="delete" />
                </Table.Cell>
                <Table.Cell
                  textAlign="center"
                  className="edit"
                  onClick={() => null}
                >
                  <Icon name="edit" />
                </Table.Cell>
              </Table.Row>
            ))
          )}
          )
        </Table.Body>
      </Table>
    </div>
  );
};

export default Contact;
