import { FC } from "react";

const IssueClosedIcon: FC<{ className: string }> = ({ className }) => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clip-path="url(#clip0_21_1983)">
        <path
          d="M11.4812 6.75551C11.4846 6.94981 11.4125 7.13785 11.28 7.28003L7.78 10.78C7.63937 10.9205 7.44875 10.9994 7.25 10.9994C7.05125 10.9994 6.86062 10.9205 6.72 10.78L4.72 8.78003C4.58752 8.63785 4.5154 8.44981 4.51882 8.25551C4.52225 8.06121 4.60096 7.87582 4.73838 7.73841C4.87579 7.60099 5.06118 7.52228 5.25548 7.51885C5.44978 7.51543 5.63782 7.58755 5.78 7.72003L7.25 9.19003L10.22 6.22003C10.3622 6.08755 10.5502 6.01543 10.7445 6.01885C10.9388 6.02228 11.1242 6.10099 11.2616 6.23841C11.399 6.37582 11.4777 6.56121 11.4812 6.75551Z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.6569 14.1569C15.1571 12.6566 16 10.6217 16 8.5C16 6.37827 15.1571 4.34344 13.6569 2.84315C12.1566 1.34285 10.1217 0.5 8 0.5C5.87827 0.5 3.84344 1.34285 2.34315 2.84315C0.842855 4.34344 0 6.37827 0 8.5C0 10.6217 0.842855 12.6566 2.34315 14.1569C3.84344 15.6571 5.87827 16.5 8 16.5C10.1217 16.5 12.1566 15.6571 13.6569 14.1569ZM12.5962 13.0962C13.8152 11.8772 14.5 10.2239 14.5 8.5C14.5 6.77609 13.8152 5.12279 12.5962 3.90381C11.3772 2.68482 9.72391 2 8 2C6.27609 2 4.62279 2.68482 3.40381 3.90381C2.18482 5.12279 1.5 6.77609 1.5 8.5C1.5 10.2239 2.18482 11.8772 3.40381 13.0962C4.62279 14.3152 6.27609 15 8 15C9.72391 15 11.3772 14.3152 12.5962 13.0962Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_21_1983">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IssueClosedIcon;
