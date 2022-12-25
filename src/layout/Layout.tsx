import React from "react";
import { Outlet } from "react-router-dom";

import NavBar from "./components/Navbar";

import { useGetCategoriesQuery } from "../_redux/services/categoriesService";
import { useGetProfileQuery } from "../_redux/services/userService";
import { UserInfoDto } from "../_models/user-info.dto";

function Layout() {

  const { data: profileData } = useGetProfileQuery(null);
  const { data: categoriesData } = useGetCategoriesQuery(null);

  const profile = profileData?.data as UserInfoDto;
  const categories = categoriesData?.data || [];

  return (
    <div className="min-h-screen flex flex-col h-screen">
      <NavBar profile={profile} categories={categories} />
      <div className="flex-1 w-full p-3  mx-auto overflow-x-auto bg-gray-200">
        <Outlet />
      </div>
    </div>
  );

}
export default Layout;
