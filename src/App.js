import React from 'react';
import Layout from "./hoc/Layout"
import Header from './component/header/header';
import MainContaint from './component/mainContaint/mainContaint';
import Footer from './component/footer/Footer';

function App() {
  return <Layout header={<Header></Header>} mainContaint={<MainContaint></MainContaint>} footer={<Footer></Footer>} />
}

export default App;
