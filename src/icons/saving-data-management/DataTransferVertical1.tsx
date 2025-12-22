// Import custom components.

// Import custom utilities.

// Import custom types.
import { IconComponentProps } from '@/src/lib/types';

// Import styles.

/**
 * This function renders an SVG icon.
 */
const DataTransferVertical1 = ({
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
            viewBox="0 0 24 30"
            height={height}
            width={width}
            stroke={color}
            strokeWidth={strokeWidth}
            fill={color}
        >
            <path
                d="M780.319 403.304h22.526v28.144h-22.526z"
                style={{
                    fill: 'none'
                }}
                transform="matrix(1.00697 0 0 1.00809 -785.158 -405.83)"
            />
            <path d="M7.925 3.529A83 83 0 0 0 7.9 5.505c0 1.407.039 3.046.085 4.793.08 3.008.21 6.324.334 9.322.21 5.146.429 9.322.429 9.322 0 .02.016.037.037.038.02 0 .037-.017.037-.037 0 0 .259-4.174.52-9.318.152-2.997.315-6.311.425-9.318.064-1.746.117-3.385.132-4.792.014-1.296-.015-2.394-.02-3.196A1.46 1.46 0 0 0 8.898.945a1.44 1.44 0 0 0-1.6.476c-.674.933-1.687 2.294-2.688 3.722C2.668 7.91.728 10.845.728 10.845a.196.196 0 1 0 .306.245s2.427-2.548 4.69-5.06c.794-.878 1.556-1.756 2.2-2.501M16.183 26.186a80 80 0 0 0 .005-1.926 191 191 0 0 0-.13-4.784 695 695 0 0 0-.417-9.302 913 913 0 0 0-.513-9.301.037.037 0 1 0-.074 0s-.221 4.167-.435 9.305a715 715 0 0 0-.34 9.305 197 197 0 0 0-.09 4.785c-.002 1.289.036 2.383.048 3.19.008.314.103.612.285.85a1.45 1.45 0 0 0 1.61.518c.279-.097.537-.263.715-.516.654-.962 1.63-2.356 2.59-3.814 1.872-2.84 3.733-5.838 3.733-5.838a.196.196 0 0 0-.314-.235s-2.36 2.625-4.561 5.215c-.76.894-1.49 1.786-2.112 2.548" />
        </svg>
    );
};

export default DataTransferVertical1;
