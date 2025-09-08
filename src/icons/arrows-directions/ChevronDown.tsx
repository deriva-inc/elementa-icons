// Import custom components.

// Import custom utilities.

// Import custom types.
import { IconComponentProps } from '@/src/lib/types';

// Import styles.

/**
 * This function renders an SVG icon of a downward chevron.
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2025-09-08
 * @modifier
 * @modified
 * @since 1.7.0
 */
const ChevronDown = ({
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
            viewBox="0 0 33 13"
            height={height}
            width={width}
            stroke={color}
            strokeWidth={strokeWidth}
            fill={color}
        >
            <path d="M32.121.435s-3.57 2.356-7.379 4.954a359 359 0 0 0-4.38 3.035c-1.105.778-2.095 1.501-2.886 2.068a2.03 2.03 0 0 1-1.209.388 2.03 2.03 0 0 1-1.21-.385c-1.46-1.026-3.594-2.557-5.812-4.087C4.95 3.445.414.435.414.435a.243.243 0 1 0-.292.39S4.28 4.337 8.328 7.632c2.09 1.7 4.157 3.321 5.55 4.433a3.94 3.94 0 0 0 2.39.815 3.94 3.94 0 0 0 2.39-.812c.766-.6 1.737-1.349 2.793-2.192a344 344 0 0 0 4.14-3.355A658 658 0 0 0 32.413.825a.244.244 0 0 0-.292-.39" />
        </svg>
    );
};
export default ChevronDown;
