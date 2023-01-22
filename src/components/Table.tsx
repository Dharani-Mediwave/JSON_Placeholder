import React, { useMemo } from 'react';
import DataTable from 'react-data-table-component';
// import Loading from '../Loading';
// import { SelectDropdown } from '../SelectDropdown';

// import './table.css';

const Style = () => {
  const tabIndex = 0;
  return (
    <div tabIndex={tabIndex} className="no-data">
      There are no records to display
    </div>
  );
};

export const Table = ({
  columns,
  data,
  customSort,
  paginationTotalRows,
  onChangePage,
  onChangeRowsPerPage,
  progressPending,
  showfilter,
  onChangeFilter,
  filterOptions = [],
  filterValue = '',
  selectableRows,
  disabledShare,
  handleSelectedRowsChange,
  clearSelectedRows,
  loading,
  paginationServer,
  ...props
}: any) => {
  // const subHeaderComponentMemo = useMemo(() => {
  //   return (
  //     <div className='data_table_header'>
  //       <div
  //         className={`datatabel-search-block ${showfilter && 'items-baseline'}`}
  //       >
  //         {showfilter && (
  //           <div className='sm:w-[250px]'>
  //             <div className='sort-and-filter'>
  //               <SelectDropdown
  //                 type='text'
  //                 name='filterBy'
  //                 id='filterBy'
  //                 label='Filter by'
  //                 isSearchable={true}
  //                 onChange={(e: any) => {
  //                   onChangeFilter(e.value);
  //                 }}
  //                 value={filterValue}
  //                 optionsArray={filterOptions}
  //               />
  //             </div>
  //           </div>
  //         )}
  //       </div>
  //     </div>
  //   );
  // }, []);

  return (
    <>
      <div className="table-blk">
        <DataTable
          columns={columns}
          data={data}
          // paginationPerPage={props.paginationPerPage}
          // paginationpage
          pagination
          paginationServer={paginationServer}
          onChangePage={onChangePage}
          paginationTotalRows={paginationTotalRows}
          onChangeRowsPerPage={onChangeRowsPerPage}
          // progressPending={progressPending}
          // progressComponent={<p>Loading...</p>}
          // noDataComponent={loading ? <p>Loading...</p> : <Style />}
          // sortFunction={customSort}
          // selectableRows={selectableRows}
          // onSelectedRowsChange={handleSelectedRowsChange}
          // clearSelectedRows={clearSelectedRows}
          // subHeader
          // subHeaderComponent={subHeaderComponentMemo}
          {...props}
        />
      </div>
    </>
  );
};
