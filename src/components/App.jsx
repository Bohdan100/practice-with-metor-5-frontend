import { Routes, Route } from 'react-router-dom';

import { SharedLayout } from './SharedLayout/SharedLayout';
import { HomePage } from 'page/HomePage';
import { UsersPage } from 'page/UsersPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
      </Route>
    </Routes>
  );
};
