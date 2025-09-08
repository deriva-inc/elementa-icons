// Import custom components.

// Import custom utilities.

// Import custom types.
import { IconComponentProps } from '@/src/lib/types';

// Import styles.

/**
 * This function renders an SVG icon of a upward chevron.
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2025-09-08
 * @modifier
 * @modified
 * @since 1.7.0
 */
const IcNavigationChevronUp = ({
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
            viewBox="0 0 34 13"
            height={height}
            width={width}
            stroke={color}
            strokeWidth={strokeWidth}
            fill={color}
        >
            <path d="M.93 12.828s3.57-2.356 7.378-4.954a359 359 0 0 0 4.38-3.035c1.105-.778 2.095-1.5 2.886-2.068a2.03 2.03 0 0 1 1.21-.388c.424 0 .851.121 1.21.385 1.46 1.026 3.593 2.557 5.811 4.087a687 687 0 0 0 8.832 5.973.243.243 0 1 0 .292-.39s-4.159-3.512-8.207-6.807c-2.089-1.7-4.157-3.32-5.55-4.433a3.94 3.94 0 0 0-2.389-.815 3.94 3.94 0 0 0-2.39.812c-.767.601-1.738 1.35-2.794 2.192a344 344 0 0 0-4.14 3.355C3.9 9.672.637 12.438.637 12.438a.244.244 0 0 0 .292.39" />
        </svg>
    );
};
export default IcNavigationChevronUp;
