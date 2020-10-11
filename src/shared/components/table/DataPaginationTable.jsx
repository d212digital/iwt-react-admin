import React from 'react';
import ReactDataGrid from 'react-data-grid';
import PropTypes from 'prop-types';

const DataPaginationTable = ({ heads, rows, onSorting }) => {
  const rowGetter = i => rows[i];

  return (
    <div className="table">
      <ReactDataGrid
        columns={heads}
        rowGetter={rowGetter}
        rowsCount={rows.length}
        rowHeight={44}
        minColumnWidth={100}
        onGridSort={onSorting}
      />
    </div>
  );
};

DataPaginationTable.propTypes = {
  heads: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    name: PropTypes.string,
    editable: PropTypes.bool,
    sortable: PropTypes.bool,
  })).isRequired,
  rows: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onSorting: PropTypes.func.isRequired,
};

export default DataPaginationTable;
