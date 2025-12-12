import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { JobSearch } from './pages/JobSearch';
import { RouteView } from './pages/RouteView';
import { Profile } from './pages/Profile';
import { Tab } from './types';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.HOME);

  const renderContent = () => {
    switch (activeTab) {
      case Tab.HOME:
        return <Home onNavigateToRoute={() => setActiveTab(Tab.ROUTE)} />;
      case Tab.SEARCH:
        return <JobSearch />;
      case Tab.ROUTE:
        return <RouteView />;
      case Tab.PROFILE:
        return <Profile />;
      default:
        return <Home onNavigateToRoute={() => setActiveTab(Tab.ROUTE)} />;
    }
  };

  return (
    <Layout activeTab={activeTab} onTabChange={setActiveTab}>
      {renderContent()}
    </Layout>
  );
}

export default App;



