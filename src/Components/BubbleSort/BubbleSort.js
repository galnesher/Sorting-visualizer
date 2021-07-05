import { NavDropdown } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';

const BubbleSort = (props) => {


    const bubbleSort = async () => {

        let len = props.array.length;
        let arr = props.array;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len - i - 1; j++) {
                if (arr[i + 1]) {
                    arr[j].color = "yellow";
                    arr[j + 1].color = "yellow";
                    props.setArray([...arr])
                    await props.sleep();
                }
                if (arr[j].value > arr[j + 1].value) {
                    let tmp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = tmp;
                    arr[j].color = "orange";
                    arr[j + 1].color = "orange";
                    props.setArray([...arr])
                    await props.sleep();
                }
                if (arr[i + 1]) {
                    arr[j].color = "blue";
                    arr[j + 1].color = "blue";
                    props.setArray([...arr])
                    await props.sleep();
                }
            }
            arr[len - i - 1].color = "green";
            props.setArray([...arr])
            await props.sleep();
        }
        props.setArray([...arr]);
    };

    const bubbleSortDetails = {
        name: "Bubble Sort",
        colors: {
            comparison: "yellow",
            swap: "orange",
            sorted: "green"
        },
        performance: {
            WorstCaseTimeComplexity: "O(n2)",
            AverageTimeComplexity: "O(n2)",
            BestCaseTimeComplexity: "O(n)",
            WorstCaseSpaceComplexity: "O(1)"
        },
        description: `Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list. Although the algorithm is simple, it is too slow and impractical for most problems`
    };


    return (
        <NavDropdown.Item href="#action/3.1" onClick={(e) => {
            e.preventDefault();
            props.setSelectedSort(bubbleSortDetails)
            bubbleSort();
        }}>Bubble Sort</NavDropdown.Item>

    )
}
export default BubbleSort;
