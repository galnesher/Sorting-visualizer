import { NavDropdown } from 'react-bootstrap';


const MergeSort = (props) => {





    return (
        <>
            <NavDropdown.Item href="#action/3.1" onClick={(e) => {
                e.preventDefault();
                // props.setSelectedSort(bubbleSortDetails);
                alert('In process , comming soon...')
            }}>Merge Sort</NavDropdown.Item>
        </>
    )
}

export default MergeSort;