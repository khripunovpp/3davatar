import {createRoot} from 'react-dom/client'
import App from "./App.jsx";
import {Suspense} from "react";
import Loader from "./Spinner.jsx";
import SpinnerComponent from "./Spinner.jsx";

createRoot(document.getElementById('root')).render(<Suspense fallback={<SpinnerComponent />}>
  <App/>
</Suspense>)