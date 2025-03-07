import { Html, useProgress } from "@react-three/drei";
import { a, useSpring } from "@react-spring/web";
import React from "react";

export default function Loader() {
  const { progress } = useProgress();
  const props = useSpring({ width: progress + "%" });

  return (
    <Html center>
      <div className="flex flex-col items-center justify-center bg-black/80 dark:bg-primary-100 p-5 rounded-lg shadow-lg">
        <div className="w-48 h-2 bg-primary-100 dark:bg-gray-700 rounded-full overflow-hidden">
          <a.div className="h-full bg-primary-500 rounded-full" style={props} />
        </div>
        <p className="mt-2 text-sm font-medium text-white dark:text-primary-500">
          {Math.round(progress)}% loaded
        </p>
      </div>
    </Html>
  );
}
