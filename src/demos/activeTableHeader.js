import React, { useState } from "react";
import { Table } from "antd";

export const ActiveTableHeader = props => {
  const { showAdd, tableColumns } = props;

  const headerAdd = {
    title: "姓名",
    dataIndex: "id",
    key: "dk_add"
  };

  if (showAdd) {
    let res = showAdd;
    for (const column in tableColumns) {
      if (column.key === headerAdd.key) {
        res = false;
      }
    }
    if (res) {
      tableColumns.push(headerAdd);
    }
  }

  return (
    <Table
      columns={tableColumns}
      onHeaderRow={column => {
        return {
          onClick: () => {
            if (column.key === "dk_add") {
              alert(123);
              tableColumns.push({});
            }
          }
        };
      }}
    />
  );
};
