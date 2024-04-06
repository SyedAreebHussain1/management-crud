import React from "react";
import axios from "axios";
import { ConfigProvider } from "antd";
import SchoolManagement from "./components/SchoolManagement/SchoolManagement";

axios.defaults.baseURL = "https://64a1de510079ce56e2db730e.mockapi.io/v1/";
function App() {
  return (
    <ConfigProvider>
      <SchoolManagement />
    </ConfigProvider>
  );
}

export default App;
