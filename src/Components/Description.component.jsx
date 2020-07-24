import React from 'react';

const Description = () => {
    return (
        <div>
            <p>This is a React Component using AG-Grid to make an interactive pivot table.</p>

          Try this
            <ol>
                <li>Click the <span style={{ border: '1px solid lightGrey', padding: '0px 3px 0px 3px'}}>›</span> button to the left of Ford.</li>
                <li>Click the checkbox to select one of the rows from the list that dropped down</li>
                <li>Now click the <span style={{ border: '1px solid lightGrey', padding: '0px 3px 0px 3px' }}>›</span> button to the left of Porsche.</li>
                <li>Click the first checkbox in this drop down</li>
                <li>Click the <span style={{ border: '1px solid lightGrey', padding: '0px 3px 0px 3px' }}>Get Selected rows</span> button to save what you selected</li>
                <li>Next, test the exporting functions. Right click the last row you selected. Mouse over to Export and choose the export option of your choice.</li>
                <li>Last, hover the cursor over any column name. A menu button will appear. Click the menu button and try some of the extra features.</li>
            </ol>
        </div>
    );
};

export default Description;