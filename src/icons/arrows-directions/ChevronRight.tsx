// Import custom components.

// Import custom utilities.

// Import custom types.
import { IconComponentProps } from '@/src/lib/types';

// Import styles.

/**
 * This function renders an SVG icon of a right chevron.
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2025-09-08
 * @modifier
 * @modified
 * @since 1.7.0
 */
const IcNavigationChevronRight = ({
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
            viewBox="0 0 13 33"
            height={height}
            width={width}
            stroke={color}
            strokeWidth={strokeWidth}
            fill={color}
        >
            <path d="M.124.775s2.356 3.57 4.954 7.379a359 359 0 0 0 3.035 4.38c.778 1.105 1.5 2.095 2.068 2.886.265.36.388.785.388 1.21s-.121.851-.385 1.21c-1.026 1.46-2.557 3.593-4.087 5.811a687 687 0 0 0-5.973 8.832.243.243 0 1 0 .39.292s3.512-4.159 6.807-8.207c1.7-2.089 3.32-4.157 4.433-5.55a3.94 3.94 0 0 0 .815-2.389 3.94 3.94 0 0 0-.812-2.39c-.601-.767-1.35-1.738-2.192-2.794a344 344 0 0 0-3.355-4.14C3.28 3.744.514.483.514.483a.244.244 0 0 0-.39.292" />
        </svg>
    );
};
export default IcNavigationChevronRight;
