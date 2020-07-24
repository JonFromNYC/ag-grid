import React, { Component } from 'react';
import './App.scss';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import Description from './Components/Description.component';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [{
        headerName: "Make", field: "make", rowGroup: true
      }, {
        headerName: "Price", field: "price"
      }],
      rowData: null,
      autoGroupColumnDef: {
        headerName: "Model",
        field: "model",
        cellRenderer: 'agGroupCellRenderer',
        cellRendererParams: {
          checkbox: true
        }
      }
    }
  }
  componentDidMount() {
    fetch('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/rowData.json')
      .then(result => result.json())
      .then(rowData => this.setState({ rowData }))
  }

  onButtonClick = e => {
    const selectedNodes = this.gridApi.getSelectedNodes()
    const selectedData = selectedNodes.map(node => node.data)
    const selectedDataStringPresentation = selectedData.map(node => node.make + ' ' + node.model).join(', ')
    alert(`Selected nodes: ${selectedDataStringPresentation}`)
  }

  render() {
    return (
      
      <div style={{ height: '250px', width: '600px' }} className="ag-theme-alpine">
        <button onClick={this.onButtonClick}>Get selected rows</button>
        <AgGridReact
          rowSelection="multiple"
          onGridReady={params => this.gridApi = params.api}
          columnDefs={this.state.columnDefs}
          groupSelectsChildren={true}
          autoGroupColumnDef={this.state.autoGroupColumnDef}
          rowData={this.state.rowData}>
        </AgGridReact>
        <Description />
      </div>
    );
  }
}

export default App;