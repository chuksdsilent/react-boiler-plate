import RequestHandler from "./RequestHandler";
import { API_URLS } from "../utils/api-url";

class UserService {
  create(data) {
    return RequestHandler.post(API_URLS.user.create, data);
  }
  authenticate(data) {
    return RequestHandler.post(API_URLS.user.authenticate, data);
  }
}

export const UserServices = new UserService();