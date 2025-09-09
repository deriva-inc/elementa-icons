// Import custom components.

// Import custom utilities.

// Import custom types.
import { IconComponentProps } from '@/src/lib/types';

// Import styles.

/**
 * This function renders an SVG icon of a check mark.
 */
const Check = ({
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
            viewBox="0 0 33 24"
            height={height}
            width={width}
            stroke={color}
            strokeWidth={strokeWidth}
            fill={color}
        >
            <path d="M.323 12.132s3.41 4.214 6.18 7.543c1.081 1.3 2.073 2.454 2.694 3.19a1.87 1.87 0 0 0 1.347.634 1.9 1.9 0 0 0 1.403-.554c.697-.691 1.853-1.802 3.233-3.208.96-.978 2.03-2.094 3.146-3.293a443 443 0 0 0 5.721-6.295C28.564 5.106 32.495.577 32.495.577a.037.037 0 0 0 0-.052.037.037 0 0 0-.053 0s-4.42 4.053-9.34 8.704a446 446 0 0 0-6.139 5.888 179 179 0 0 0-3.207 3.234c-1.369 1.417-2.448 2.602-3.12 3.318l-.063.05-.099-.018c-.674-.687-1.73-1.781-2.925-2.98a841 841 0 0 0-6.936-6.854.197.197 0 0 0-.277-.013.197.197 0 0 0-.013.278" />
        </svg>
    );
};

export default Check;
