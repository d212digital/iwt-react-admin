import React, { useState } from 'react';
import ReactDataGrid from 'react-data-grid';
import update from 'immutability-helper';
import PropTypes from 'prop-types';

const EditableTable = ({ heads, rows }) => {
  const originalRows = rows;
  const row = originalRows.slice(0, 10);
  const [stateRows, setStateRows] = useState(row);

  const handleGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    const itemRows = stateRows.slice();
    for (let i = fromRow; i <= toRow; i += 1) {
      const rowToUpdate = itemRows[i];
      itemRows[i] = update(rowToUpdate, { $merge: updated });
    }
    setStateRows(itemRows);
  };

  const handleGridSort = (sortColumn, sortDirection) => {
    const comparer = (a, b) => {
      if (sortDirection === 'ASC') {
        return (a[sortColumn] > b[sortColumn]) ? 1 : -1;
      } if (sortDirection === 'DESC') {
        return (a[sortColumn] < b[sortColumn]) ? 1 : -1;
      }
      return null;
    };

    const sortRows = originalRows.slice(0);
    const items = sortDirection === 'NONE' ? originalRows.slice(0, 10) : sortRows.sort(comparer).slice(0, 10);
    setStateRows(items);
  };

  const rowGetter = i => stateRows[i];

  return (
    <div className="table">
      <ReactDataGrid
        onGridSort={handleGridSort}
        enableCellSelect
        columns={heads}
        rowGetter={rowGetter}
        rowsCount={stateRows.length}
        onGridRowsUpdated={handleGridRowsUpdated}
        rowHeight={44}
        minColumnWidth={100}
      />
    </div>
  );
};

EditableTable.propTypes = {
  heads: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    name: PropTypes.string,
    editable: PropTypes.bool,
    sortable: PropTypes.bool,
  })).isRequired,
  rows: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default EditableTable;
