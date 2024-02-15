import React from 'react'

const Filter = ({setFilterList }) => {
    const handleFilterList = (event) => {
        console.log(event.target.value)
        setFilterList(event.target.value)
    }
    return (
    <div>
        Filter: <input onChange={handleFilterList}></input>
    </div>)
}

export default Filter