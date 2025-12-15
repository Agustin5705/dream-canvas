"use client";

export default function TestPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-amber-900 w-[300px] h-[300px] relative overflow-hidden">
        <div
          className="raindrop animate-rain-animation"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        ></div>
      </div>
    </div>
  );
}
