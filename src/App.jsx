
import { ContextProvider } from "./Context/Context";
import { AccoutProvider } from "./Context/Manage_Accout";
import Layout from "./Layout/Layout";


const App = () => {
  return (
    <ContextProvider>
      <AccoutProvider >

    <Layout />

      </AccoutProvider>
    </ContextProvider>
  );
};

export default App;