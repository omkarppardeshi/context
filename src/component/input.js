import React, { useContext, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Form,
  Input,
  FormGroup,
  Button,
} from "reactstrap";
import TodoContext from "../context/todoContext";
import Listing from "./listing";

function InputTodo() {
  const { addTodo, tasks } = useContext(TodoContext);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(inputValue);
    setInputValue("");
  };

  return (
    <Container>
      <Card className="mb-3">
        <CardBody>
          <Form onSubmit={handleSubmit}>
            <Row className="justify-content-center mt-4">
              <Col md={10}>
                <FormGroup>
                  <Input
                    type="text"
                    placeholder="Enter a task name"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md={2}>
                <Button type="submit" color="primary">
                  Add Task
                </Button>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>

      <Listing />
    </Container>
  );
}

export default InputTodo;
