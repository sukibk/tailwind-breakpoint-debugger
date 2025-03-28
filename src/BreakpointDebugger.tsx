import React, { useEffect, useState } from "react";

type BreakpointDebuggerProps = {
  breakpoints?: string[];
};

const defaultBreakpoints = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"];

const BreakpointDebugger: React.FC<BreakpointDebuggerProps> = ({
  breakpoints = defaultBreakpoints,
}) => {
  const [mounted, setMounted] = useState(false);
  const [isDevelopment, setIsDevelopment] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Check for development mode in Next.js
    setIsDevelopment(
      process.env.NODE_ENV === "development" ||
        (typeof window !== "undefined" &&
          (window.location.hostname === "localhost" ||
            window.location.hostname === "127.0.0.1")),
    );
  }, []);

  if (!mounted || !isDevelopment) return null;

  return (
    <div
      className="fixed bottom-2 left-2 z-50 text-white text-xs font-bold p-2 rounded
                       bg-gray-800 bg-opacity-70 pointer-events-none min-w-[60px] text-center"
    >
      {breakpoints.includes("xs") && <div className="block sm:hidden">xs</div>}
      {breakpoints.includes("sm") && (
        <div className="hidden sm:block md:hidden">sm</div>
      )}
      {breakpoints.includes("md") && (
        <div className="hidden md:block lg:hidden">md</div>
      )}
      {breakpoints.includes("lg") && (
        <div className="hidden lg:block xl:hidden">lg</div>
      )}
      {breakpoints.includes("xl") && (
        <div className="hidden xl:block 2xl:hidden">xl</div>
      )}
      {breakpoints.includes("2xl") && (
        <div className="hidden 2xl:block 3xl:hidden">2xl</div>
      )}
      {breakpoints.includes("3xl") && (
        <div className="hidden 3xl:block 4xl:hidden">3xl</div>
      )}
      {breakpoints.includes("4xl") && (
        <div className="hidden 4xl:block">4xl</div>
      )}
    </div>
  );
};

export default BreakpointDebugger;
