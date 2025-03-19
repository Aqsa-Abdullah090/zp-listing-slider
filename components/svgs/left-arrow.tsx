interface Props {
  className?: string;
  strokeColor?: string;
}

function LeftArrow({ className, strokeColor = "black" }: Readonly<Props>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 5.207 9.414"
      className={className}
    >
      <path
        d="M74.805,384.151l4-4-4-4"
        transform="translate(-74.098 -375.444)"
        stroke={strokeColor} // Dynamically setting stroke color
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        opacity="0.25"
      />
    </svg>
  );
}

export default LeftArrow;

