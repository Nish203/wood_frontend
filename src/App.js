import Routerr from "./Routerr";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div>
      <Toaster
  position="top-right"
  reverseOrder={false}
/>
      <Routerr/>
    </div>

  );
}

export default App;
