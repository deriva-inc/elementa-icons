// Import global from third party libraries.

// Import custom components.

// Import custom utilities.

// Import custom types.
import { IconComponentProps } from '@/src/lib/types';

/**
 * This function renders an SVG icon of an arrow pointing downwards.
 */
const ArrowDown = ({
    color = '#000000',
    height = '1em',
    strokeWidth = 1,
    width = '1em'
}: IconComponentProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            viewBox="0 0 25 29"
            stroke={color}
            strokeWidth={strokeWidth}
            width={width}
            height={height}
            fill={color}
        >
            <path d="M24.185 14.28s-3.77 3.822-7.172 7.4c-.826.867-1.623 1.725-2.34 2.508-.948 1.03-1.749 1.934-2.3 2.545l-.004-.002-.005.003c-.983-1.064-2.746-3.022-4.654-5.042A552.286 552.286 0 0 0 .552 14.28a.244.244 0 0 0-.367.32s3.258 4.267 6.337 8.123c1.734 2.173 3.424 4.192 4.341 5.315a1.988 1.988 0 0 0 3.012 0c.528-.631 1.311-1.551 2.2-2.632.673-.821 1.411-1.73 2.155-2.67 3.066-3.868 6.322-8.136 6.322-8.136a.244.244 0 0 0-.367-.32Z" />
            <path d="M12.612 23.65s.113-1.067.26-2.763c.1-1.15.225-2.572.325-4.144.057-.887.103-1.815.135-2.763.021-.61.038-1.225.036-1.842a51.027 51.027 0 0 0-.042-1.842 164.88 164.88 0 0 0-.349-5.526C12.78 2.3 12.612.625 12.612.625a.243.243 0 0 0-.487 0S11.96 2.3 11.761 4.77c-.068.844-.137 1.773-.2 2.763-.056.887-.113 1.814-.149 2.763a48.819 48.819 0 0 0-.043 1.842c0 .617.015 1.233.036 1.842.033.948.078 1.876.135 2.763.1 1.572.226 2.994.326 4.144.146 1.696.26 2.763.26 2.763a.243.243 0 0 0 .486 0Z" />
        </svg>
    );
};

export default ArrowDown;
