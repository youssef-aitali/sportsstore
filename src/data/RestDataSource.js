import Axios from "axios";
import { RestUrls } from "./Urls";

export class RestDataSource {
    SendRequest = (method, url, params) => Axios.request({ method, url, params });
    GetData = (dataType, params) => this.SendRequest("get", RestUrls[dataType], params);
}