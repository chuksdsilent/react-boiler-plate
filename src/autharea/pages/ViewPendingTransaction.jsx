import ViewTransaction from "./ViewTransaction";

const ViewPendingTransaction = () => {
  return (
    <div>
      <ViewTransaction url="user/transaction/pending/get-transaction" />
    </div>
  );
};

export default ViewPendingTransaction;
