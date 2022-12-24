import React from "react";

function NavBar() {
  const categoryList = ["ClassA", "ClassB", "ClassC", "ClassD", "ClassE"];

  const profile = {
    id: 99,
    userId: 99,
    username: "joe",
    avatar: "https://loremflickr.com/80/80/man?lock=56",
  };

  return (
    <div className="navbar bg-blue-500">
      <div className="flex-1">
        <a className="btn-ghost btn text-xl normal-case text-white" href="">
          ng-refresh-token-demo
        </a>
        <ul className="menu menu-horizontal p-0 text-white">
          {categoryList.map((category) => (
            <li key={category}>
              <span>{category}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown-end dropdown">
          <label className="btn-ghost btn-circle online avatar btn">
            <div className="w-10 rounded-full">
                <img src={ profile?.avatar } alt="" />
            </div>
          </label>
          <ul className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow">
            <li>
              <a className="justify-start">
                <label className="btn-ghost btn-circle avatar btn">
                  <div className="w-10 rounded-full">
                    <img src={ profile?.avatar } alt="" />
                  </div>
                </label>
                <div className="text-xl">{profile.username}</div>
              </a>
            </li>
            <li>
              <a>刪除帳號</a>
            </li>
            <li>
              <a>登出</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
