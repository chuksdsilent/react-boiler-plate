import React, { useEffect, useState } from "react";
import { PendingServices } from "../../services/PendingService";
import Transactions from "./Transactions";
import { Spin, Skeleton } from "antd";

const Pending = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    PendingServices.allPendingTransaction()
      .then((response) => {
        setTransactions(response.data.data);
      })
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Spin spinning={loading} active>
        <Transactions transactions={transactions} />
      </Spin>
    </div>
  );
};

export default Pending;
