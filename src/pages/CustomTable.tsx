import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from '../components';
import DataTable from 'react-data-table-component';

const BASE_URL = 'https://www.mecallapi.com/api/attractions';
// const BASE_URL = 'https://www.mecallapi.com/api/attractions?page=1&per_page=10';

// interface CustomTable {

// }

export const CustomTable: React.FC = () => {
  const [itemList, setItemList] = useState([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(10);
  const [totalRows, setTotalRows] = useState<number>(0);

  const columns = [
    {
      name: 'Id',
      selector: (row: any) => row.id,
    },
    {
      name: 'Name',
      selector: (row: any) => row.name,
    },
    {
      name: 'Detail',
      selector: (row: any) => row.detail,
    },
    {
      name: 'Latitude',
      selector: (row: any) => row.latitude,
    },
    {
      name: 'Latitude',
      selector: (row: any) => row.latitude,
    },
  ];

  const getData = async () => {
    try {
      const URL = `${BASE_URL}?page=${currentPage}&per_page=${perPage}`;
      const response = await axios.get(URL);
      console.log('response :>>', response);
      if (response?.data) {
        setTotalRows(response.data?.data.length);
        setItemList(response.data?.data);
        return response.data?.data;
      }
    } catch (error) {
      console.log('error block :>>', error);
    }
  };

  useEffect(() => {
    getData();
  }, [currentPage, perPage]);

  const handlePerRowsChange = (perRowPage: number) => {
    console.log('handlePerRowsChange :>>', perRowPage);
    setPerPage(perRowPage);
  };

  const handlePageChange = (pageChange: number) => {
    console.log('handlePageChange :>>', pageChange);
    setCurrentPage(pageChange);
  };

  return (
    <div>
      <h3>React data table components {JSON.stringify(totalRows)}</h3>
      <DataTable
        title={`Users - ${JSON.stringify(totalRows)}`}
        columns={columns}
        data={itemList}
        pagination
        paginationServer
        onChangeRowsPerPage={handlePerRowsChange}
        onChangePage={handlePageChange}
      />
    </div>
  );
  return (
    <div>
      <h3>React data table components {JSON.stringify(totalRows)}</h3>
      <Table
        columns={columns}
        data={itemList}
        onChangeRowsPerPage={handlePerRowsChange}
        onChangePage={handlePageChange}
        paginationTotalRows={totalRows}
        paginationServer={true}
      />
    </div>
  );
};
