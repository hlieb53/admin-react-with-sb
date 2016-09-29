/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
// import { Panel, Input, Button } from 'react-bootstrap';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import Pagination from 'react-bootstrap/lib/Pagination';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Well from 'react-bootstrap/lib/Well';
// import Header from '../../components/Header/Header.js';
import Input from 'react-bootstrap/lib/InputGroup';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Table.css';

const title = 'Table';

// function handleLogin() {
//   console.log('login function');
// }


function Table(props, context) {
  context.setTitle(title);
  return (
    <div>
      <div className="col-lg-12">
        <PageHeader>Tables</PageHeader>
      </div>

      <div className="col-lg-12">
          <Panel header={<span>DataTables Advanced Tables</span>} >
          <div>
  <div className="dataTable_wrapper">
    <div id="dataTables-example_wrapper" className="dataTables_wrapper form-inline dt-bootstrap no-footer">

      <div className="row">
        <div className="col-sm-9">
          <div className="dataTables_length" id="dataTables-example_length">
            <label>Show <select name="dataTables-example_length" aria-controls="dataTables-example" className="form-control input-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label>
          </div>
        </div>
        <div className="col-sm-3">
          <div id="dataTables-example_filter" className="dataTables_filter">
            <label>Search:<input type="search" className="form-control input-sm" placeholder="" aria-controls="dataTables-example" /></label>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <table className="table table-striped table-bordered table-hover dataTable no-footer" id="dataTables-example" role="grid" aria-describedby="dataTables-example_info">
            <thead>
              <tr role="row"><th className="sorting_asc" tabIndex="0" aria-controls="dataTables-example" rowSpan="1" colSpan="1" aria-label="Rendering engine: activate to sort column descending" aria-sort="ascending" style={ {width: 265} }>Rendering engine</th><th className="sorting" tabIndex="0" aria-controls="dataTables-example" rowSpan="1" colSpan="1" aria-label="Browser: activate to sort column ascending" style={ {width: 321} }>Browser</th><th className="sorting" tabIndex="0" aria-controls="dataTables-example" rowSpan="1" colSpan="1" aria-label="Platform(s): activate to sort column ascending" style={ {width: 299} }>Platform(s)</th><th className="sorting" tabIndex="0" aria-controls="dataTables-example" rowSpan="1" colSpan="1" aria-label="Engine version: activate to sort column ascending" style={ {width: 231} }>Engine version</th><th className="sorting" tabIndex="0" aria-controls="dataTables-example" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending" style={ {width: 180} }>CSS grade</th></tr>
            </thead>
            <tbody>
              <tr className="gradeA odd" role="row">
                <td className="sorting_1">Gecko</td>
                <td>Firefox 1.0</td>
                <td>Win 98+ / OSX.2+</td>
                <td className="center">1.7</td>
                <td className="center">A</td>
              </tr>
              <tr className="gradeA even" role="row">
                <td className="sorting_1">Gecko</td>
                <td>Firefox 1.5</td>
                <td>Win 98+ / OSX.2+</td>
                <td className="center">1.8</td>
                <td className="center">A</td>
              </tr>
              <tr className="gradeA odd" role="row">
                <td className="sorting_1">Gecko</td>
                <td>Firefox 2.0</td>
                <td>Win 98+ / OSX.2+</td>
                <td className="center">1.8</td>
                <td className="center">A</td>
              </tr>
              <tr className="gradeA even" role="row">
                <td className="sorting_1">Gecko</td>
                <td>Firefox 3.0</td>
                <td>Win 2k+ / OSX.3+</td>
                <td className="center">1.9</td>
                <td className="center">A</td>
              </tr>
              <tr className="gradeA odd" role="row">
                <td className="sorting_1">Gecko</td>
                <td>Camino 1.0</td>
                <td>OSX.2+</td>
                <td className="center">1.8</td>
                <td className="center">A</td>
              </tr>
              <tr className="gradeA even" role="row">
                <td className="sorting_1">Gecko</td>
                <td>Camino 1.5</td>
                <td>OSX.3+</td>
                <td className="center">1.8</td>
                <td className="center">A</td>
              </tr>
              <tr className="gradeA odd" role="row">
                <td className="sorting_1">Gecko</td>
                <td>Netscape 7.2</td>
                <td>Win 95+ / Mac OS 8.6-9.2</td>
                <td className="center">1.7</td>
                <td className="center">A</td>
              </tr>
              <tr className="gradeA even" role="row">
                <td className="sorting_1">Gecko</td>
                <td>Netscape Browser 8</td>
                <td>Win 98SE+</td>
                <td className="center">1.7</td>
                <td className="center">A</td>
              </tr>
              <tr className="gradeA odd" role="row">
                <td className="sorting_1">Gecko</td>
                <td>Netscape Navigator 9</td>
                <td>Win 98+ / OSX.2+</td>
                <td className="center">1.8</td>
                <td className="center">A</td>
              </tr>
              <tr className="gradeA even" role="row">
                <td className="sorting_1">Gecko</td>
                <td>Mozilla 1.0</td>
                <td>Win 95+ / OSX.1+</td>
                <td className="center">1</td>
                <td className="center">A</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="dataTables_info" id="dataTables-example_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div>
        </div>
        <div className="col-sm-6" pullRight >
          <Pagination activePage={1}
            items={6} perPage={10}
            first={true} last={true}
            prev={true} next={true}
            onSelect={ (pageNumber) => {} } />
        </div>
      </div>
    </div>
  </div>
  <Well>
    <h4>DataTables Usage Information</h4>
    <p>DataTables is a very flexible, advanced tables plugin for jQuery. In SB Admin, we are using a specialized version of DataTables built for Bootstrap 3. We have also customized the table headings to use Font Awesome icons in place of images. For complete documentation on DataTables, visit their website at <a target="_blank" href="https://datatables.net/">'https://datatables.net/'</a>.</p>
    <Button bsSize="large" block href="https://datatables.net/">View DataTables Documentation</Button>
  </Well>
</div>
          </Panel>
      </div>
    </div>

  );
}


Table.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Table);
