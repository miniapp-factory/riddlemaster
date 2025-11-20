"use client";

import { useEffect, useState } from "react";

export function Riddle() {
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowAnswer(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mt-6 p-4 border rounded-lg shadow-md max-w-md text-center">
      <h2 className="text-xl font-semibold mb-2">🤔 Riddle Time!</h2>
      <p className="mb-4">
        What has keys but can&apos;t open locks?
      </p>
      {showAnswer ? (
        <p className="text-green-600 font-medium">A piano.</p>
      ) : (
        <p className="text-gray-500">Answer will appear in 5 seconds...</p>
      )}
    </div>
  );
}
