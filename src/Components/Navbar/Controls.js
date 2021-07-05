import React, { useState, useEffect } from 'react';
import BubbleSort from "../BubbleSort/BubbleSort";
import QuickSort from "../QuickSort/QuickSort";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import MergeSort from '../MergeSort/MergeSort';


const Controls = (props) => {


    const handleChangeLength = (length) => {
        props.setArrayLength(length);
    }

    const handleChangeMilisec = (ms) => {
        props.setMs(ms);
    }
    return (
        <>
            <Navbar bg="dark" expand="md" variant="dark">
                <Navbar.Brand href="/">Sorting Visualizer</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Array Length" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/" onClick={(e) => {
                                e.preventDefault();
                                handleChangeLength(10);
                            }}>10</NavDropdown.Item>
                            <NavDropdown.Item href="/" onClick={(e) => {
                                e.preventDefault();
                                handleChangeLength(25);
                            }}>25</NavDropdown.Item>
                            <NavDropdown.Item href="/" onClick={(e) => {
                                e.preventDefault();
                                handleChangeLength(50);
                            }}>50</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Speed" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/" onClick={(e) => {
                                e.preventDefault();
                                handleChangeMilisec(1000);
                            }}>X1</NavDropdown.Item>
                            <NavDropdown.Item href="/" onClick={(e) => {
                                e.preventDefault();
                                handleChangeMilisec(500);
                            }}>X2</NavDropdown.Item>
                            <NavDropdown.Item href="/" onClick={(e) => {
                                e.preventDefault();
                                handleChangeMilisec(100);
                            }}>X4</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Sort" id="basic-nav-dropdown">
                            <BubbleSort array={props.array} setArray={props.setArray} sleep={props.sleep} setSelectedSort={props.setSelectedSort} />
                            <QuickSort array={props.array} setArray={props.setArray} sleep={props.sleep} setSelectedSort={props.setSelectedSort} />
                            <MergeSort array={props.array} setArray={props.setArray} sleep={props.sleep} />
                        </NavDropdown>
                        <Nav.Link href="/" onClick={(e) => {
                            e.preventDefault();
                            props.restArray()
                        }}>Generate New Array</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </>
    )
}
export default Controls;