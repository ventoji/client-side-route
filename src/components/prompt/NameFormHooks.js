import React, {useState } from "react"
import { Form, FormControl} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
//import {Button} from "react-bootstrap";
import {Prompt} from 'react-router-dom';

const NameFormHooks = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [valid, setvalid] = useState(false);

    const onHandleFirstNameChange = (e) =>{
        setFirstName(e.target.value)
    }

    const onHandleLastNameChange = (e) =>{
        setLastName(e.target.value)
    }

    const onSubmit = () => {

        if (firstName === '' || lastName === '') {
           setvalid(false)
        } else {
            setvalid(true)
            // take some action
            alert(`Your name is ${firstName} ${lastName} `)
           
        }

    }
    return(
        <div>
            <Prompt when={valid !== true}
            message='Leaving this form will lose your data.'
            />
            <h1>Prompt for Completion</h1>
                <Form  inline={true}>
                    <FormControl
                        type="text"
                        value={firstName}
                        placeholder="Enter your first name."
                        onChange={onHandleFirstNameChange}
                    />

                    <FormControl
                        type="text"
                        value={lastName}
                        placeholder="Enter your last name."
                        onChange={onHandleLastNameChange}
                    />
                    <Button className={'btn btn-primary'} onClick={onSubmit}>Submit</Button>
                </Form>
        
        </div>

    );
}

export default NameFormHooks;