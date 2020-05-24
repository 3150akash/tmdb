import React from 'react';
import Layout from "./hoc/Layout/Layout"
import Header from './component/header/header';
import MainContaint from './container/mainContaint/mainContaint';
import Footer from './component/footer/Footer';
import { store } from "./store/index"
import { Provider } from "react-redux"
import { BrowserRouter } from 'react-router-dom';
import "./App.css"

function App() {
  let maincontainer = (
    <BrowserRouter>
      <MainContaint />
    </BrowserRouter>
  )
  return <Provider store={store}>
    <Layout
      header={<Header></Header>}
      mainContaint={maincontainer}
      footer={<Footer></Footer>} />
  </Provider>
}

export default App;
