import React, { useContext, useState } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  Container,
  Table,
  Button,
  CardHeader,
  InputGroup,
  Input,
  FormGroup,
} from "reactstrap";
import TodoContext from "../context/todoContext";

function Listing() {
  const { tasks, deleteTodo, allRemove } = useContext(TodoContext);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTasks, setFilteredTasks] = useState([]);

  const displayTasks = searchQuery ? filteredTasks : tasks;

  const handleSearch = () => {
    const filtered = tasks.filter((task) =>
      task.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredTasks(filtered);
  };

  return (
    <Container>
      {tasks.length > 0 && (
        <Card>
          <CardHeader>
            <Row>
              <Col md={4} className="my-2">
                <FormGroup>
                  <Input
                    type="text"
                    placeholder="Search tasks"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col className="text-start my-2">
                <Button color="primary" onClick={handleSearch}>
                  Search
                </Button>
              </Col>
              <Col className="text-end my-2">
                <Button color="danger" outline onClick={() => allRemove()}>
                  Remove All
                </Button>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <Table bordered responsive>
              <thead>
                <tr>
                  <th>Sr No.</th>
                  <th>Task</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {displayTasks.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item}</td>
                    <td>
                      <Button
                        color="secondary"
                        onClick={() => deleteTodo(index)}
                      >
                        Remove task
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      )}
    </Container>
  );
}

export default Listing;
