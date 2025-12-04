import React from 'react';

const ProfilePage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-4">プロフィール</h1>
            <p className="text-lg">ここにユーザーのプロフィール情報が表示されます。</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">プロフィールを編集</button>
        </div>
    );
};

export default ProfilePage;