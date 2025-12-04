import React from "react"

export default function Dashboard() {
  return (
    <div className="p-4 md:p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">ダッシュボード</h1>

      <div className="w-full bg-gray-200 rounded-full h-4">
        <div className="bg-blue-500 h-4 rounded-full" style={{ width: "45%" }}></div>
      </div>

      <p className="text-gray-600">今日の進捗：45%</p>

      <h2 className="text-xl font-semibold text-gray-800">今日のタスク</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <TaskCard title="レポート作成" progress={60} due="12/08" />
        <TaskCard title="テスト勉強" progress={30} due="12/15" />
        <TaskCard title="読書" progress={20} due="12/20" />
      </div>
    </div>
  )
}

function TaskCard({ title, progress, due }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md">
      <h3 className="font-semibold text-gray-800">{title}</h3>

      <div className="w-full bg-gray-200 h-3 rounded-full mt-3">
        <div
          className="bg-blue-500 h-3 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p className="text-sm text-gray-600 mt-1">進捗：{progress}%</p>
      <p className="text-xs text-gray-400 mt-2">期限：{due}</p>
    </div>
  )
}
