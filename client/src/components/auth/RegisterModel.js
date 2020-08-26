import React, { useState } from 'react';
import { v1 as uuid } from "uuid";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink
} from 'reactstrap';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import addItem from '../../redux/shoppingSlice'
import axios from 'axios';
import { registerSucccess, registerFail } from '../../redux/authSlice';

RegisterModel.propTypes = {};

function RegisterModel(props) {
    const [modal, setModal] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState(null);

    // handleToggle
    const handleToggle = () => {
        setModal(!modal);
    }

    // handleChangeName
    const handleChangeName = (e) => {
        return setName(e.target.value);
    }
    //handleChangeEmail
    const handleChangeEmail = (e) => {
        return setEmail(e.target.value);
    }
    //handleChangePasswword
    const handleChangePasswword = (e) => {
        return setPassword(e.target.value);
    }
    // handleOnSubmit
    const dispatch = useDispatch();
    const handleOnSubmit = (e) => {
        e.preventDefault();
        // Create user object
        const user = {
            name,
            email,
            password
        }
        // header
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        //Request body
        const body = JSON.stringify({ name, email, password });
        // Register User

        axios
            .post('/api/auth/register', body, config)
            .then(res => dispatch(registerSucccess(res.data)))
        // .catch(err => dispatch(registerFail))
    }
    return (
        <div>
            <NavLink onClick={handleToggle}>
                Register
            </NavLink>


            <Modal isOpen={modal} toggle={handleToggle}>
                <ModalHeader toggle={handleToggle}>Add to Shopping List</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleOnSubmit} className>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Name"
                                className='mb-3'
                                onChange={handleChangeName}
                            />

                            <Label for="email">Email</Label>
                            <Input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Email"
                                className='mb-3'
                                onChange={handleChangeEmail}
                            />

                            <Label for="password">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                className='mb-3'
                                onChange={handleChangePasswword}
                            />

                            <Button
                                color="dark"
                                style={{ marginBottom: '2rem' }}
                                block
                                type="submit"
                            >Register</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default RegisterModel;