import React, { useState } from "react";

type Props = {
  txt: string;
  children: React.ReactNode;
  className?: string;
};

const Tooltip: React.FC<Props> = ({ txt, children, className }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  return (
    <div className={`relative flex ${className}`}>
      <span
        className="flex"
        onMouseEnter={() => setTooltipVisible(true)}
        onMouseLeave={() => setTooltipVisible(false)}
      >
        {children}
      </span>
      <div
        className={`absolute bg-slate-600 rounded-md w-max py-1 px-2 top-full text-slate-200 z-10 ${
          tooltipVisible ? "visible" : "invisible"
        }`}
      >
        {txt}
      </div>
    </div>
  );
};

export default Tooltip;