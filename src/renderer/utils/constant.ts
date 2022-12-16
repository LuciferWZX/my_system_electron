import {LoginDevice} from "@/types/user";

export const ENV = process.env.NODE_ENV
export const isDEV=ENV === "development"
export const isProd=!isDEV
export const REQUEST_URL = "http://localhost:3000/api/"
export const SOCKET_URL = "ws://localhost:3000/"
export const LOGIN_DEVICE = navigator.userAgent.toLowerCase().includes(" electron/")?LoginDevice.App:LoginDevice.Web

