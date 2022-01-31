import RequestHandler from "./RequestHandler";
import { API_URLS } from "../utils/api-url";

class PendingService {
  allPendingTransaction(data) {
    return RequestHandler.get(API_URLS.pending.all);
  }
  cancelTransaction(id, data) {
    return RequestHandler.put(API_URLS.pending.cancel, id, data);
  }
  getPendingTransaction(url) {
    return RequestHandler.single(url);
  }
}

export const PendingServices = new PendingService();
