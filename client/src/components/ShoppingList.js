import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Button, ListGroup, ListGroupItem } from 'reactstrap';
import { v1 as uuid } from "uuid";
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';
import { removeItems, itemsLoading, getItems } from '../redux/shoppingSlice';

ShoppingList.propTypes = {};

function ShoppingList(props) {

    const dispatch = useDispatch();
    const items = useSelector(state => state.items.items);
    console.log(items);

    // Get Items
    useEffect(() => {
        async function fetchData() {
            try {
                axios
                    .get('/api/items')
                    .then(res =>
                        dispatch(getItems(res.data))
                    )
            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, [getItems])

    // Delete items
    const handleDelete = (item) => {
        const removeItem = item;
        console.log(removeItem)
        axios
            .delete(`/api/items/${item}`)
            .then(res => dispatch(removeItems(removeItem)))
            .catch(e => console.log(e))
    }
    return (
        <Container>
            <ListGroup>
                <TransitionGroup >
                    {items.map((item) => (
                        <CSSTransition key={item._id} timeout={500} classNames="fade">
                            <ListGroupItem>
                                <Button
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick={() => handleDelete(item._id)}
                                >&times;
                                </Button>
                                {item.name}
                            </ListGroupItem>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ListGroup>
        </Container>
    );
}

export default ShoppingList;