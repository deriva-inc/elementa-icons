// Import custom components.

// Import custom utilities.

// Import custom types.
import { IconComponentProps } from '@/src/lib/types';

// Import styles.

/**
 * This function renders an SVG icon of a cross cancel.
 */
const Cancel = ({
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
            viewBox="0 0 26 27"
            height={height}
            width={width}
            stroke={color}
            strokeWidth={strokeWidth}
            fill={color}
        >
            <path d="M1.038.83s1.027 1.213 2.677 3.1c1.121 1.281 2.51 2.873 4.071 4.595.881.971 1.816 1.98 2.782 2.995a94 94 0 0 0 1.9 1.951c.648.642 1.31 1.27 1.967 1.886 1.024.96 2.042 1.882 3.017 2.761a307 307 0 0 0 3.06 2.721c2.745 2.413 4.64 4.028 4.64 4.028a.037.037 0 0 0 .051 0 .037.037 0 0 0 .001-.052s-1.604-1.904-4-4.665a295 295 0 0 0-2.7-3.076c-.875-.98-1.79-2.004-2.744-3.034a91 91 0 0 0-1.874-1.978 94 94 0 0 0-1.939-1.913 175 175 0 0 0-2.978-2.8C7.257 5.776 5.674 4.38 4.4 3.25 2.523 1.588 1.316.554 1.316.554a.196.196 0 1 0-.278.276" />
            <path d="M1.316 26.842s1.207-1.034 3.084-2.695c1.275-1.129 2.86-2.526 4.57-4.098.967-.888 1.97-1.829 2.978-2.8a97 97 0 0 0 1.938-1.916 94 94 0 0 0 1.872-1.979c.953-1.03 1.87-2.053 2.743-3.034a320 320 0 0 0 2.702-3.075c2.396-2.76 4.001-4.664 4.001-4.664a.037.037 0 0 0 0-.052.037.037 0 0 0-.053 0s-1.893 1.616-4.639 4.03c-.939.825-1.97 1.74-3.058 2.72-.975.88-1.993 1.803-3.018 2.762a96 96 0 0 0-1.967 1.885 94 94 0 0 0-1.902 1.95 169 169 0 0 0-2.783 2.994c-1.56 1.721-2.949 3.314-4.069 4.595-1.65 1.888-2.677 3.101-2.677 3.101a.196.196 0 1 0 .278.276" />
        </svg>
    );
};

export default Cancel;
