import React, { useState, useEffect } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Menu, Dropdown, Space } from "antd";

const items = [
  { key: "1", label: "MEN'S SHOES" },
  { key: "2", label: "WOMEN'S SHOES" },
  { key: "3", label: "ACCESSORIES" },
  { key: "4", label: "STORES" },
  { key: "5", label: "SHOE CARE" },
  { key: "6", label: "GUIDES" },
  { key: "7", label: "MAKING & REPAIR" },
  { key: "8", label: "THE ARTICLE" },
];

const DropDown: React.FC = () => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    setScrolling(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menu = <Menu items={items} />;

  return (
    <div
      className={`flex items-center justify-around gap-15 mx-auto fixed w-full px-6 py-4 z-50 mt-[115px] transition-all duration-300 ${
        scrolling
          ? "bg-white text-black mt-[96px] hidden"
          : "bg-transparent text-white"
      }`}
    >
      {/* Десктопная версия: горизонтальное меню */}
      <div className="hidden md:flex space-x-8">
        {[
          "MEN'S SHOES",
          "WOMEN'S SHOES",
          "ACCESSORIES",
          "STORES",
          "SHOE CARE",
        ].map((label) => (
          <Dropdown
            key={label}
            overlay={menu}
            trigger={["hover"]}
            placement="bottomCenter"
            className="cursor-pointer"
          >
            <a onClick={(e) => e.preventDefault()} className="hover:underline">
              <Space>
                {label} <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        ))}
      </div>

      {/* Мобильная версия: выпадающее меню */}
      <div className="md:hidden flex items-center justify-center">
        <Dropdown overlay={menu} trigger={["click"]} placement="bottomCenter">
          <a onClick={(e) => e.preventDefault()} className="hover:underline">
            <Space>
              MENU <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
    </div>
  );
};

export default DropDown;
