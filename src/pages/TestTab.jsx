// src/pages/TestTabs.jsx

import { useState } from "react";

function TestTabs() {
  const tabs = {
    "소개": <p>이 케이크는 정성으로 만들었어요.</p>,
    "리뷰": <p>아직 리뷰가 없습니다.</p>,
    "배송 안내": <p>내일 도착! 🚚</p>
  };

  const [activeTab, setActiveTab] = useState("소개");

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">📌 탭 테스트</h2>

      {/* 탭 버튼 */}
      <div className="flex border-b mb-4">
        {Object.keys(tabs).map((name) => (
          <button
            key={name}
            onClick={() => setActiveTab(name)}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition ${
              activeTab === name
                ? "border-pink-500 text-pink-600"
                : "border-transparent text-gray-500 hover:text-black"
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      {/* 탭 내용 */}
      <div className="text-gray-700 text-sm bg-pink-50 p-4 rounded shadow">
        {tabs[activeTab]}
      </div>
    </div>
  );
}

export default TestTabs;
