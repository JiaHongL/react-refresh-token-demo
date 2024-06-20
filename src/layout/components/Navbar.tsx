import React from "react";
import { useNavigate } from "react-router-dom";
import { UserInfoDto } from "../../_models/user-info.dto";
import { useAppDispatch } from "../../_redux/hooks";
import { useDeleteUserMutation } from "../../_redux/services/userService";
import { clearTokens } from "../../_redux/slice/tokensSlice";

type NavBarProps = {
  profile: UserInfoDto;
  categories: string[];
};

function NavBar({ profile, categories }: NavBarProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [deleteUser] = useDeleteUserMutation();

  function logout() {
    dispatch(clearTokens());
    navigate("/login");
  }

  function deleteAccount() {
    deleteUser("").then((res) => {
      if ("data" in res) {
        alert(res.data.message);
      }
    });
  }

  return (
    <div className="navbar bg-blue-500">
      <div className="flex-1">
        <a onClick={()=>navigate('/home')} className="btn-ghost btn text-xl normal-case text-white" href="">
          react-refresh-token-demo
        </a>
        <ul className="menu menu-horizontal p-0 text-white hidden md:flex">
          {categories.map((category) => (
            <li key={category}>
              <span>{category}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-none gap-2">
        <div tabIndex={0} className="dropdown-end dropdown">
          <label className="btn-ghost btn-circle online avatar btn">
            <div className="w-10 rounded-full">
              <img src={profile?.avatar} alt="" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <a className="justify-start">
                <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
                  <div className="w-10 rounded-full">
                    <img src={profile?.avatar} alt="" />
                  </div>
                </label>
                <div className="text-xl">{profile?.username}</div>
              </a>
            </li>
            <li>
              <a onClick={deleteAccount}>刪除帳號</a>
            </li>
            <li>
              <a onClick={logout}>登出</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
