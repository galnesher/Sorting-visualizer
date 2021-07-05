import './sortingVisualizer.css'
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import Controls from '../Navbar/Controls';



const SortingVisualizer = (props) => {
    const [array, setArray] = useState([]);
    const [arrayLength, setArrayLength] = useState(5);
    const [ms, setMs] = useState(1000);
    const [selectedSort, setSelectedSort] = useState();


    const randomIntFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const restArray = () => {
        const arr = [];
        for (let i = 0; i < arrayLength; i++) {
            arr.push({
                value: randomIntFromInterval(5, 280),
                color: "blue"
            })
        }
        setArray(arr);
    }

    const sleep = () => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    useEffect(() => {
        console.log(array);
    }, [array])




    useEffect(() => {
        //reset every length change
        const arr = [];
        for (let i = 0; i < arrayLength; i++) {
            arr.push({
                value: randomIntFromInterval(5, 280),
                color: "blue"
            })
        }
        setArray(arr);
    }, [arrayLength])


    return (
        <>
            <Controls array={array}
                setArray={setArray}
                sleep={sleep}
                restArray={restArray}
                setArrayLength={setArrayLength}
                setMs={setMs}
                setSelectedSort={setSelectedSort}
            />
            <div >
                <div className="array-container" >
                    {array.map((value, index) => (
                        <div className="array-bar"
                            key={index}
                            style={{
                                height: `${value.value}px`,
                                backgroundColor: `${value.color}`
                            }}></div>
                    ))}
                </div>
            </div>
            {selectedSort && (
                <Container fluid="md">
                    <Jumbotron>
                        <Row className="mb-5">
                            {selectedSort.colors.pivot && (
                                <Col>Pivot: <div className="rectangle" style={{ backgroundColor: `${selectedSort.colors.pivot}` }}></div> </Col>
                            )}
                            <Col>Comparison: <div className="rectangle" style={{ backgroundColor: `${selectedSort.colors.comparison}` }}></div></Col>
                            <Col>Swap: <div className="rectangle" style={{ backgroundColor: `${selectedSort.colors.swap}` }}></div></Col>
                            <Col>Sorted: <div className="rectangle" style={{ backgroundColor: `${selectedSort.colors.sorted}` }}></div> </Col>
                        </Row>
                        <Row>
                            <Col expand="sm">
                                <>
                                    <h1>{selectedSort.name}</h1>
                                    <p>
                                        {selectedSort.description}
                                    </p>
                                </>
                            </Col>
                            <Col expand="sm">
                                <>
                                    <h4>Performance</h4>
                                    <ul>
                                        <li>
                                            Worst-case time complexity: {selectedSort.performance.WorstCaseTimeComplexity}
                                        </li>
                                        <li>
                                            Average time complexity: {selectedSort.performance.AverageTimeComplexity}
                                        </li>
                                        <li>
                                            Best-case time complexity: {selectedSort.performance.BestCaseTimeComplexity}
                                        </li>
                                        <li>
                                            Worst-case space complexity: {selectedSort.performance.WorstCaseSpaceComplexity}
                                        </li>
                                    </ul>
                                </>

                            </Col>
                        </Row>
                    </Jumbotron>
                </Container>
            )}

        </>
    )
}
export default SortingVisualizer;