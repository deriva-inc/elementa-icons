// Import custom components.

// Import custom utilities.

// Import custom types.
import { IconComponentProps } from '@/src/lib/types';

// Import styles.

/**
 * This function renders an SVG icon of a left chevron.
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2025-09-08
 * @modifier
 * @modified
 * @since 1.7.0
 */
const ChevronLeft = ({
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
            viewBox="0 0 14 33"
            height={height}
            width={width}
            stroke={color}
            strokeWidth={strokeWidth}
            fill={color}
        >
            <path d="M12.984 32.483s-2.356-3.57-4.954-7.38a359 359 0 0 0-3.035-4.38c-.778-1.104-1.5-2.094-2.068-2.885a2.03 2.03 0 0 1-.388-1.21 2.03 2.03 0 0 1 .385-1.21c1.026-1.46 2.557-3.593 4.087-5.811C9.974 5.31 12.984.775 12.984.775a.243.243 0 1 0-.39-.292S9.082 4.642 5.787 8.69c-1.7 2.089-3.32 4.157-4.433 5.55a3.94 3.94 0 0 0-.815 2.389 3.94 3.94 0 0 0 .812 2.39c.601.767 1.35 1.738 2.192 2.794a344 344 0 0 0 3.355 4.14 658 658 0 0 0 5.696 6.822.244.244 0 0 0 .39-.292" />
        </svg>
    );
};
export default ChevronLeft;
