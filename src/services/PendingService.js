import RequestHandler from "./RequestHandler";
import { API_URLS } from "../utils/api-url";

class PendingService {
  allPendingTransaction(data) {
    return RequestHandler.get(API_URLS.pending.all);
  }
}

export const PendingServices = new PendingService();
