import React from "react";

function SquareProgressBar({ percentage }) {
  const size = 34; // Size of the square
  const stroke = 2; // Stroke width
  const innerSize = size - stroke; // Inner size considering the stroke
  const progress = (25.5 / 100) * 11 * innerSize; // Total length of the progress bar

  return (
    <div className="flex justify-center items-center">
      <svg
        height={size}
        width={size}
        className="relative"
      >
        {/* Background rectangle */}
        <rect
          x={stroke / 2}
          y={stroke / 2}
          width={innerSize}
          height={innerSize}
          fill="none"
          stroke="#e5e7eb"
          opacity={0.5} // Gray background
          strokeWidth={stroke}
          rx="20" // Rounded corners
          ry="20"
        />

        {/* Foreground progress rectangle */}
        <rect
          x={stroke / 2}
          y={stroke / 2}
          width={innerSize}
          height={innerSize}
          fill="none"
          stroke="#BE9F56" // Green progress
          strokeWidth={stroke}
          strokeDasharray={`${progress} ${4 * innerSize}`} // Total perimeter
          strokeDashoffset={4 * innerSize - progress} // Offset for progress
          rx="20" // Rounded corners
          ry="20"
          style={{ transition: "stroke-dashoffset 0.5s ease" }}
        />
      </svg>

      {/* Centered Percentage Text */}
      <div
        className="absolute flex justify-center items-center md:right-355"
      >
        <span className="text-[8px]">{percentage}%</span>
      </div>
    </div>
  );
}

export default SquareProgressBar;