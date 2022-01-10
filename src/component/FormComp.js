import React from 'react'
import {Grid,Form,Segment,Button} from "semantic-ui-react"

const FormComp = ({ info, setInfo, handleSubmit }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  return (
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column style={{ width: 300 }}>
        <div className="ui piled segments">
          <div className="ui segment brand">
            <a
              href="https://github.com/clarusway"
              className="design"
              target="_blank"
              rel="noopener noreferrer"
            >
              <code>{"<Clarusway/> "}</code>
            </a>
            <span className="design header">design</span>
          </div>
        </div>
        <h2 className="contact-header">Add Contact</h2>
        <Form size="large" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              fluid
              name="userName"
              icon="user"
              iconPosition="left"
              placeholder="Name"
              value={info.userName}
              onChange={handleInputChange}
              required
            />
            <Form.Input
              fluid
              name="phoneNumber"
              icon="phone"
              iconPosition="left"
              placeholder="Phone Number"
              value={info.phoneNumber}
              onChange={handleInputChange}
              required
            />
            <Form.Input
              fluid
              name="email"
              icon="mail"
              iconPosition="left"
              placeholder="Email"
              value={info.email}
              onChange={handleInputChange}
              required
            />
            <Button color="teal" fluid size="large">
              Add
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default FormComp
