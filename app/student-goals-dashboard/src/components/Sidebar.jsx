import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 h-full p-5">
      <h2 className="text-2xl font-bold mb-5">目標管理</h2>

      <ul>
        <li className="mb-3">
          <Link to="/" className="hover:text-gray-400">ダッシュボード</Link>
        </li>
        <li className="mb-3">
          <Link to="/goals" className="hover:text-gray-400">目標一覧</Link>
        </li>
        <li className="mb-3">
          <Link to="/progress" className="hover:text-gray-400">進捗</Link>
        </li>
        <li className="mb-3">
          <Link to="/settings" className="hover:text-gray-400">設定</Link>
        </li>
      </ul>

      <div className="mt-10">
        <h3 className="text-lg font-semibold">ユーザー情報</h3>
        <p className="text-sm">名前: 山田太郎</p>
        <p className="text-sm">Email: sample@example.com</p>
      </div>
    </div>
  );
};

export default Sidebar;
