import React, { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-screen h-screen bg-gray-100 flex flex-col">
      <div className="w-full bg-white border border-b-2 h-[56px]"></div>
      <div className="flex-1 bg-white flex flex-row">
        <div className="flex flex-1 max-w-[300px] bg-gray-200">
          <h1>Sidebar</h1>
        </div>
        <div className="flex flex-1">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
