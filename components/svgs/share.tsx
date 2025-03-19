interface Props {
  className: string;
}

function Share({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 30 30"
      className={className}
    >
      <defs>
        <clipPath id="clip-path">
          <rect id="Rectangle_15044" data-name="Rectangle 15044" />
        </clipPath>
      </defs>
      <g id="Group_33688" data-name="Group 33688" clipPath="url(#clip-path)">
        <path
          id="Path_45984"
          data-name="Path 45984"
          d="M25.313,20.625a4.673,4.673,0,0,0-3.37,1.431L9.317,15.743a4.605,4.605,0,0,0,0-1.486L21.943,7.944a4.686,4.686,0,1,0-1.318-3.257,4.777,4.777,0,0,0,.058.743L8.056,11.743a4.687,4.687,0,1,0,0,6.513l12.627,6.314a4.628,4.628,0,0,0-.058.742,4.687,4.687,0,1,0,4.687-4.687"
          transform="translate(0 -0.001)"
        />
      </g>
    </svg>
  );
}
export default Share;
