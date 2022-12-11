export const ENV = process.env.NODE_ENV
export const isDEV=ENV === "development"
export const isProd=!isDEV
export const REQUEST_URL = "http://localhost:3000/api/"
