import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import AccountView from 'src/views/account/AccountView';
import CustomerListView from 'src/views/customer/CustomerListView';
import DashboardView from 'src/views/reports/DashboardView';
import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import RegisterView from 'src/views/auth/RegisterView';
import UserListView from 'src/views/users/UserListView';
import FormUsersAdd from 'src/views/users/FormUsersAdd';
import FormUserEdit from 'src/views/users/FormUserEdit';
import QuanLySanPham from 'src/views/products/ProductListView';
import TruyXuatDonHang from 'src/views/truyxuatdonhang';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <AccountView /> },
      { path: 'customers', element: <CustomerListView /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'users', element: <UserListView /> },
      { path: 'users/:id_user', element: <FormUserEdit /> },
      { path: 'users/them', element: <FormUsersAdd /> },
      { path: 'quan-ly-san-pham', element: <QuanLySanPham alias="quan-ly-san-pham" /> },
      { path: 'truy-xuat-don-hang', element: <TruyXuatDonHang /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
