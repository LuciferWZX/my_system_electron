import {extend} from "umi-request";
import errorHandle from "@/utils/errorHandle";
import {isDEV, REQUEST_URL} from "@/utils/constant";
import requestInterceptors from "@/utils/requestInterceptors";

const request = extend({
  prefix: isDEV?'/api/':REQUEST_URL,
  timeout: 1000,
  errorHandler:errorHandle
});
requestInterceptors(request)
export default request
