import {extend} from "umi-request";
import errorHandle from "@/utils/errorHandle";

const request = extend({
  prefix: '/api/',
  timeout: 1000,
  errorHandler:errorHandle
});

export default request
