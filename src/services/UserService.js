import RequestHandler from "./RequestHandler";
import { API_URLS } from "../utils/api-url";

class UserService {
  create(data) {
    return RequestHandler.post(API_URLS.user.create, data);
  }
  addFund(data) {
    return RequestHandler.post(API_URLS.user.add, data);
  }
  completeRegistration(data) {
    return RequestHandler.post(API_URLS.user.completeRegistration, data);
  }
  authenticate(data) {
    return RequestHandler.post(API_URLS.user.authenticate, data);
  }
  getUser(data) {
    return RequestHandler.post(API_URLS.user.all, data);
  }
}

export const UserServices = new UserService();
