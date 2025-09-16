// Import custom components.

// Import custom utilities.

// Import custom types.
import { IconComponentProps } from '@/src/lib/types';

// Import styles.

/**
 * This function renders an SVG icon of an info.
 */
const Info = ({
    color = '#000000',
    height = '1em',
    strokeWidth = 1,
    width = '1em'
}: IconComponentProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            style={{
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                strokeLinejoin: 'round',
                strokeMiterlimit: 2
            }}
            viewBox="0 0 30 30"
            height={height}
            width={width}
            stroke={color}
            strokeWidth={strokeWidth}
            fill={color}
        >
            <ellipse
                cx={621.368}
                cy={81.007}
                rx={0.649}
                ry={0.642}
                transform="matrix(3.74837 0 0 3.78893 -2314.179 -297.91)"
            />
            <path d="M5.994 26.258c-2.789-2.523-4.279-5.932-4.468-9.415-.186-3.395.89-6.863 3.324-9.603 2.357-2.73 5.604-4.213 8.938-4.489 3.327-.274 6.766.654 9.533 2.954a13.5 13.5 0 0 1 4.857 8.906c.394 3.434-.534 6.982-2.98 9.754-2.502 2.85-5.416 4.49-8.571 4.914-3.108.417-6.438-.332-9.837-2.24a.08.08 0 0 0-.106.027.08.08 0 0 0 .027.106c3.395 2.113 6.78 3.015 9.985 2.73 3.36-.3 6.517-1.908 9.296-4.81 2.81-2.95 3.978-6.827 3.675-10.626-.301-3.793-2.09-7.499-5.159-10.169C21.371 1.615 17.434.43 13.618.765 9.81 1.098 6.145 2.94 3.526 6.123.985 9.298-.071 13.195.363 16.942a14.27 14.27 0 0 0 5.377 9.617.197.197 0 0 0 .254-.3" />
            <path d="M15.954 24.794s.01-2.065-.117-4.403c-.168-3.08-.54-6.604-.54-6.604a.358.358 0 0 0-.718.002s-.373 3.522-.54 6.603c-.127 2.338-.117 4.401-.117 4.401a1.015 1.015 0 1 0 2.032.001" />
        </svg>
    );
};

export default Info;
