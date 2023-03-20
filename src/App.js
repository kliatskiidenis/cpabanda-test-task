import store from "./redux/store";
import {Provider} from "react-redux";
import {RouterProvider} from "react-router-dom";

import Routing from "./Routing";

const App = () => (
  <Provider store={store}>
	  <RouterProvider router={Routing} />
  </Provider>
);

export default App;