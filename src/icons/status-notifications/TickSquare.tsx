// Import custom components.

// Import custom utilities.

// Import custom types.
import { IconComponentProps } from '@/src/lib/types';

// Import styles.

/**
 * This function renders an SVG icon.
 */
const TickSquare = ({
    color = '#000000',
    height = '1em',
    strokeWidth = 1,
    width = '1em'
}: IconComponentProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 31 31"
            stroke={color}
            strokeWidth={strokeWidth}
            fill={color}
        >
            <path d="M1.4 2.3c-.2.7-.3 7.1-.2 14.3l.3 12.9h28l.1-6.5.1-6.5-.4 6.2-.4 6.3h-26l.3-13.3.3-13.2L16 2l12.5-.6-13.3-.2C5.1 1 1.8 1.3 1.4 2.3" />
            <path d="M17.4 16.2 11 22.4l-3.7-3.5-3.6-3.4L7 20.2c1.8 2.7 3.9 4.8 4.6 4.8 1.1 0 3.2-2.3 12.3-13.3 3.2-3.8-.4-1.3-6.5 4.5" />
        </svg>
    );
};

export default TickSquare;
