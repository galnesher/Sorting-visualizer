
import { left } from '@popperjs/core';
import { NavDropdown } from 'react-bootstrap';

const QuickSort = (props) => {

    const quickSortDetails = {
        name: "Quick Sort",
        colors: {
            comparison: "yellow",
            swap: "orange",
            pivot: "purple",
            sorted: "green"
        },
        performance: {
            WorstCaseTimeComplexity: "O(n2)",
            AverageTimeComplexity: "O(nlogn)",
            BestCaseTimeComplexity: "O(nlogn)",
            WorstCaseSpaceComplexity: "O(logn)"
        },
        description: `Quick Sort is an efficient, in-place sorting algorith that in practice is faster than MergeSort and HeapSort. However, it is not a stable sorting algorithm, meaning that the relative positioning of equal sort items is not preserved.Quicksort is a divide and conquer algorithm. Quicksort first divides a large array into two smaller sub-arrays: the low elements and the high elements. Quicksort can then recursively sort the sub-arrays.`
    };

    const swap = async (items, leftIndex, rightIndex) => {
        items[leftIndex].color = "orange";
        items[rightIndex].color = "orange";
        props.setArray([...items]);
        await props.sleep()
        let temp = items[leftIndex];
        items[leftIndex] = items[rightIndex];
        items[rightIndex] = temp;
        items[leftIndex].color = "blue";
        items[rightIndex].color = "blue";
        props.setArray([...items]);
    }

    const partition = async (items, left, right) => {
        debugger
        let pivot = items[Math.floor((right + left) / 2)], //middle element
            i = left,
            j = right;
        pivot.color = "purple";
        await props.sleep()
        props.setArray([...items]);
        while (i <= j) {

            while (items[i].value < pivot.value) {
                items[i].color = "yellow"
                props.setArray([...items]);
                await props.sleep()
                items[i].color = "blue";
                props.setArray([...items]);
                i++;
            }
            while (items[j].value > pivot.value) {
                items[j].color = "yellow";
                props.setArray([...items]);
                await props.sleep();
                items[j].color = "blue";
                props.setArray([...items]);
                j--;

            }

            if (i <= j) {
                await swap(items, i, j); //sawpping two elements
                pivot.color = "purple"
                props.setArray([...items]);
                i++;
                j--;
            }
        }
        items[i].color = "green";
        items[i - 1].color = "green";
        await props.sleep()
        props.setArray([...items]);
        return i;
    }

    const quickSort = async (items, left, right) => {
        debugger
        let index;
        if (items.length > 1) {
            index = await partition(items, left, right); //index returned from partition
            if (left < index - 1) { //more elements on the left side of the pivot
                quickSort(items, left, index - 1);
            }
            if (index < right) { //more elements on the right side of the pivot
                quickSort(items, index, right);
            }
        }
        props.setArray([...items]);
    }

    return (
        <NavDropdown.Item href="/" onClick={(e) => {
            e.preventDefault();
            props.setSelectedSort(quickSortDetails);
            quickSort(props.array, 0, props.array.length - 1)
        }}>Quick Sort</NavDropdown.Item>

    )
}
export default QuickSort;