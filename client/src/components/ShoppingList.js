import React, { useState } from 'react';
import { Container, Button, ListGroup, ListGroupItem } from 'reactstrap';
import { v1 as uuid } from "uuid";
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

ShoppingList.propTypes = {};

function ShoppingList(props) {

    const [items, setItems] = useState([
        { id: uuid(), name: 'Eggs' },
        { id: uuid(), name: 'Milk' },
        { id: uuid(), name: 'Steak' },
        { id: uuid(), name: 'Water' }
    ])

    return (
        <Container>
            <Button
                color="dark"
                style={{ marginBottom: '2rem' }}
                onClick={() => {
                    const name = prompt('Enter Item');
                    if (name) {
                        const newItems = [...items];
                        newItems.push({ id: uuid(), name });
                        setItems(newItems)
                    }
                }}
            >
                Add Item
            </Button>

            <ListGroup>
                <TransitionGroup>
                    {items.map(({ id, name }) => (
                        <CSSTransition key={id} timeout={500} classNames="fade">
                            <ListGroupItem>
                                <Button
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick={() => {
                                        const newItems = items.filter(item => item.id !== id)
                                        setItems(newItems);
                                    }}
                                >&times;</Button>
                                {name}
                            </ListGroupItem>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ListGroup>
        </Container>
    );
}

export default ShoppingList;