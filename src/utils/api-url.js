export const API_URLS = {
  user: {
    create: "user/create",
    completeRegistration: "complete-registration",
    authenticate: "login",
    all: "user/user-information",
    add: "user/add-fund",
  },
  pending: {
    all: "user/transaction/pending",
    cancel: "user/transaction/pending/cancel",
    getTransaction: "user/transaction/pending/get-transaction",
  },
};
