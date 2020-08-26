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
    Input
} from 'reactstrap';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/shoppingSlice';
import axios from 'axios';

ItemModel.propTypes = {};

function ItemModel(props) {
    const [modal, setModal] = useState(false);
    const [name, setName] = useState('');
    // handleToggle
    const handleToggle = () => {
        setModal(!modal);
    }
    // handleChangeName
    const handleChangeName = (e) => {
        return setName(e.target.value);
    }
    // handleOnSubmit
    const dispatch = useDispatch();
    const handleOnSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            name: name
        }
        // Add Item 
        axios
            .post('/api/items', newItem)
            .then(res => dispatch(addItem(res.data)))
        // const action = addItem(newItem);
        // dispatch(action);
        // Close modal
        handleToggle();
    }
    return (
        <div>
            <Button
                color="dark"
                style={{ marginBottom: '2rem' }}
                onClick={handleToggle}
            >
                AddItem
        </Button>
            <Modal isOpen={modal} toggle={handleToggle}>
                <ModalHeader toggle={handleToggle}>Add to Shopping List</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleOnSubmit}>
                        <FormGroup>
                            <Label for="item">Item</Label>
                            <Input
                                type="text"
                                name="name"
                                id="item"
                                placeholder="Add shopping item"
                                onChange={handleChangeName}
                            />
                            <Button
                                color="dark"
                                style={{ marginBottom: '2rem' }}
                            >Add Item</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default ItemModel;