// Import custom components.

// Import custom utilities.

// Import custom types.
import { IconComponentProps } from '@/src/lib/types';

// Import styles.

/**
 * This function renders an SVG icon of a plus.
 */
const Add = ({
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
            viewBox="0 0 31 32"
            height={height}
            width={width}
            stroke={color}
            strokeWidth={strokeWidth}
            fill={color}
        >
            <path d="M1.484 17.64s5.434.003 11.6-.116c8.08-.172 17.397-.541 17.397-.541.2-.006.36-.167.36-.362a.353.353 0 0 0-.358-.354s-9.319-.378-17.402-.548c-6.163-.125-11.6-.111-11.6-.111A1.013 1.013 0 0 0 .467 16.62a1.02 1.02 0 0 0 1.017 1.02" />
            <path d="M17.013 30.098s.003-5.434-.117-11.6c-.171-8.08-.541-17.398-.541-17.398a.37.37 0 0 0-.362-.36.353.353 0 0 0-.354.358s-.378 9.32-.548 17.403c-.125 6.162-.111 11.6-.111 11.6a1.013 1.013 0 0 0 1.013 1.013 1.02 1.02 0 0 0 1.02-1.016" />
        </svg>
    );
};

export default Add;
