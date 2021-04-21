import React from 'react';

export default ({updateFrom, handleSelectTitle}) => {
    if (!updateFrom) return null;
    console.log(updateFrom)

    const handleSelectClick = (e) => {
        const selectItems = document.querySelectorAll('.custom-select-items')
        Array.prototype.forEach.call(selectItems, (item) => {
            item.classList.toggle('hide');
            // console.log(item);
        })
        e.target.classList.toggle('select-icon--down');
        e.target.classList.toggle('select-icon--up');
    }
    const handleItemClick = (e) => {
        const selectItems = document.querySelectorAll('.custom-select-items');
        const selectField = document.querySelectorAll('.custom-select-field');
        Array.prototype.forEach.call(selectItems, (item) => {
            item.classList.add('hide');
        });
        handleSelectTitle(e.target.value)
        selectField.innerText = e.target.value;
        console.log(selectField);
        console.log(e.target.value);
    }

    return (
        <>
        <div className='custom-select-container' data-issue-type={`select-container-${updateFrom.title}`}>
            <div className='custom-select-field select-icon--down' onClick={handleSelectClick} data-issue-type={`select-field-${updateFrom.title}`}>
                Choose the task
            </div>
            {updateFrom.issues.map((issue) => (
                <div className='custom-select-items hide' key={issue.id}>
                    <label className='select-label'>
                        {issue.title}
                        <input className='select-input'
                            type='radio'
                            id={`${issue.id}`}
                            name={updateFrom.title}
                            onClick={handleItemClick} 
                            value={issue.id}
                        />
                    </label>
                </div>))}
        </div>
        </>
    );
}