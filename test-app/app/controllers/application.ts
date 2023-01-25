import Controller from '@ember/controller';
import TableCheckboxCell from 'test-app/components/table-cells/checkbox-cell';
export default class ApplicationController extends Controller {
  TableCheckboxCell = TableCheckboxCell;
  tableColumns = [
    {
      heading: 'Checkbox',
      cellComponent: TableCheckboxCell,
      width: 75,
    },
    { heading: 'Status', valuePath: 'status', width: 125 },
    { heading: 'Upload Date', valuePath: 'uploadDate', width: 125 },
    { heading: 'Description', valuePath: 'description', width: 125 },
  ];

  tableRows = [
    { status: 'Active', uploadDate: '03/02/21', description: 'Hello World!' },
    {
      email: 'foo@bar.com',
      status: 'Inactive',
      uploadDate: '04/05/20',
      description: 'This is a description',
    },
  ];
}
