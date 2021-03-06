import React from 'react';
import {Button, Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import PersonAPI from '../services/personService';
import {Row, Col, Container} from 'react-bootstrap';

let api = new PersonAPI();

class People extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            people: [],
            newName: '',
            newOccupation: ''
        };
    }

    componentDidMount = () => {
        this.setState({
            people: api.getAuthors()
        })
    };

    render = () => {

       

        let people = this.state.people.map((person, index) => {

            const linkUrl = `${this.props.match.url}/${person.id}?name=${person.name}&occupation=${person.occupation}`;

            return (
                <tr key={index}>
                    <td>{person.id}</td>
                    <td>
                        <Link to={linkUrl}>{person.name}</Link>
                    </td>
                    <td>{person.occupation}</td>
                    <td>
                        <Button onClick={(e) => this.onDeletePerson(e, person.id)}>Delete</Button>
                    </td>
                </tr>
            )
        });

        return (
            <div>
                <h1>People</h1>
                <Table className="table-rr" striped bordered hover variant="dark" responsive="sm">
               
                    <thead>
                    <tr>
                        <td><strong>ID</strong></td>
                        <td><strong>Name</strong></td>
                        <td><strong>Occupation</strong></td>
                        <td>&nbsp;</td>
                    </tr>
                    </thead>
                    <tbody>
                    {people}
                    </tbody>
                </Table>
                <Container fluid>
                <Row>
                <Col className="form-people-rr">
                    <input onChange={this.onNameChange} placeholder={'Name'} value={this.state.newName}/>
                    {' '}
                    <input onChange={this.onOccupationChange} placeholder={'Occupation'}
                           value={this.state.newOccupation}/>
                    {' '}
                    <Button onClick={this.onAddNewPerson}>Add</Button>
                </Col>
                </Row>
                </Container>
            </div>
        );
    };

    onAddNewPerson = () => {

        if (this.state.newName === '' ||
            this.state.newOccupation === '') {
            return;
        }

        const person = {
            id: this.getId(),
            name: this.state.newName,
            occupation: this.state.newOccupation
        };

        this.setState({
            people: this.state.people.concat(person),
            newName: '',
            newOccupation: ''
        });

    };

    onOccupationChange = (e) => {
        this.setState({
            newOccupation: e.target.value
        });
    };

    onNameChange = (e) => {
        this.setState({
            newName: e.target.value
        });
    };

    onDeletePerson(e, id) {
        let people = this.state.people.filter(person => (id !== person.id));

        this.setState({
            people: people
        });
    };

    getId() {

        let currentId = 0;

        for (let i = 0; i < this.state.people.length; i++) {

            if (this.state.people[i].id > currentId)
                currentId = this.state.people[i].id;
        }

        return currentId + 1;
    };
}

export default People;