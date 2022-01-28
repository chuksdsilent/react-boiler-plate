import React from "react";
import { Table, Tag } from "antd";

const TableContent = ({ title, columns, transactions }) => {
  return (
    <div>
      <h3>{title}</h3>
      {transactions ? (
        <Table columns={columns} size="small" dataSource={transactions} />
      ) : (
        ""
      )}
    </div>
  );
};

export default TableContent;
