import './App.css';
import { publicRoutes } from '~/routes';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DefaultLayout } from '~/components/Layout';
import { Fragment } from 'react';

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
          {publicRoutes.map((route, index) => {
          const Layout = route.layout === null ? Fragment: DefaultLayout;
          const Page = route.component;
          return (
            <Route
              exact
              path={route.path} 
              element={
                <Layout>
                  <Page/>
                </Layout>
                }
            />
          );
         })} 
      </Routes>
      </div>
    </Router>
  );
}

export default App;
