import {Middleware, store} from 'foca'
import {createLogger} from "redux-logger";
const middleware: Middleware[] = [];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(
    createLogger({
      collapsed: true,
      diff: true,
      duration: true,
      logErrors: true,
    }),
  );
}
store.init({
  middleware
})
console.info("[store初始化完成]")
