import {extend} from "umi-request";
import errorHandle from "@/utils/errorHandle";
import {isDEV, REQUEST_URL} from "@/utils/constant";

const request = extend({
  prefix: isDEV?'/api/':REQUEST_URL,
  timeout: 1000,
  errorHandler:errorHandle
});

export default request
