import React from 'react';

const Description = () => {
    return (
        <div>
            <p>This is a React Component using AG-Grid to make an interactive pivot table.</p>
          You can 
          <ul>
                <li>Select multiple rows</li>
                <li>Group/Ungroup the list of cars</li>
                <li>Sort or Filter the grid when you hover over the column names the filter appears
                </li>
                <li>Right Click to export to .csv, .xml, or .xlsx.</li>
                <li>Save selections you've checked off and save them to a database.
                    Click a few boxes and then click "Get Selected Rows"
                </li>
          </ul>
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