import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IconButton } from "@material-tailwind/react";
import { IoPower } from "react-icons/io5";
import classnames from 'classnames';
import { logout } from '../../../feature/action/authAction';
import { useTheme } from '../../../helpers/context';
import { styles } from '../../../constants/styles';
import { LogoDark, User } from '../../../assets';
import MenuList from './menuList';

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loggedIn } = useSelector(state => state.auth);
  const { darkMode } = useTheme();

  useEffect(() => {
    if (!loggedIn) {
      navigate('/login');
    }
  }, [loggedIn, navigate]);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={classnames(
      "col-span-1 row-span-9 shadow-sm",
      {
        "bg-slate-800 border-r border-slate-500 text-slate-200": darkMode,
        "bg-white text-slate-600": !darkMode
      }
    )}>
      <div className={`${styles.flexCenter} h-[100px] w-full`}>
        <img src={LogoDark} alt="Logo" className="object-contain h-[60px]" />
      </div>

      {/* MENU */}
      <MenuList />

      <div className="px-4">
        <div className="flex items-center justify-center gap-4 bg-indigo-700 rounded-md py-2">
          {user?.user?.img
            ? <img src={user.user.img} alt="user" className="w-10 h-10 rounded-full object-cover" />
            : <div className="w-10 h-10 rounded-full p-2 bg-slate-300 text-slate-800 font-bold flex items-center justify-center">
                {user?.user?.username?.slice(0, 2).toUpperCase()}
              </div>
          }
          <p className="text-white text-[12px]">{user?.user?.username}</p>
          <IconButton onClick={handleLogout} className="text-white text-xl bg-indigo-400">
            <IoPower />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
