// src/components/Tabs.jsx

import { useState } from "react";

function Tabs({ tabs }) {
  const [active, setActive] = useState(Object.keys(tabs)[0]); //어떤 탭이 선택되었는지지 key는 탭이름
console.log(Object.values(tabs));
  return (
    
    <div className="my-6">
      {/* 탭 버튼들 */}
      <div className="flex border-b mb-4">
        {Object.keys(tabs).map((key) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition ${
              active === key
                ? "border-pink-500 text-pink-600"
                : "border-transparent text-gray-500 hover:text-black"
            }`}
          >
            {key}
          </button>
        ))}
      </div>

      {/* 탭 내용 */}
      <div className="text-sm text-gray-700">
        {tabs[active]}
      </div>
    </div>
  );
}

export default Tabs;
