import React from 'react';
export default ({issues, handleSelectTitle}) => {
    if (!issues) return null;
    console.log(issues)

    const handleSelectClick = () => {
        const selectItems = document.querySelectorAll('.custom-select-items')
        Array.prototype.forEach.call(selectItems, (item) => {
            item.classList.remove('hide');
            // console.log(item);
        })
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
        <div className='custom-select-container' data-issue={`${issues}`}>
            <div className='custom-select-field' onClick={handleSelectClick}>
                {/* Dadadw */}
            </div>
            {issues.issues.map((issue) => (
                <div className='custom-select-items hide' key={issue.id}>
                    <label>
                        {issue.title}
                        <input 
                            type='radio'
                            id={`${issue.id}`}
                            name={issues.title}
                            onClick={handleItemClick} 
                            value={issue.id}
                        />
                    </label>
                </div>))}
        </div>
        </>
    );
}