import React from 'react';

export default ({updateFrom, issuesType, handleSelectTitle}) => {
    if (!updateFrom) return null;
    
    const domSelectElem = {
        selectItems: document.querySelector('.custom-select-items'),
        selectField: document.querySelector(`[data-issue-type=select-field-${issuesType}]`),
    };

    const handleSelectClick = (e) => {
        domSelectElem.selectItems.classList.toggle('hide');
        e.target.classList.toggle('select-icon--down');
        e.target.classList.toggle('select-icon--up');
    }
    const handleItemClick = (e) => {
        domSelectElem.selectItems.classList.toggle('hide');
        handleSelectTitle(e.target.value)
        
        const taskTitle = updateFrom.issues.find((item) => item.id === e.target.value).title;
        domSelectElem.selectField.innerText = taskTitle;

        domSelectElem.selectField.classList.toggle('select-icon--down');
        domSelectElem.selectField.classList.toggle('select-icon--up');
    }

    return (
        <>
        <div className='custom-select-container'>
            <div className='custom-select-field select-icon--down' onClick={handleSelectClick} data-issue-type={`select-field-${issuesType}`}>
                Choose the task
            </div>
            <div className='custom-select-items hide'>
                {updateFrom.issues.map((issue) => (
                    <div className='custom-select-item  ' key={issue.id}>
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
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}