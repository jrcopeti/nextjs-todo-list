import React, { ReactNode } from "react";
type DrinksLayoutProps = {
  children: ReactNode;
};

const DrinksLayout = ({ children }: DrinksLayoutProps) => {
  return (
    <div className="max-w-xl">
      <div className="mockup-code mb-8">
        <pre data-prefix="$"></pre>
        <code>npx create-nex-app@latest nextjs-tutorial</code>
      </div>
      {children}
    </div>
  );
};

export default DrinksLayout;
