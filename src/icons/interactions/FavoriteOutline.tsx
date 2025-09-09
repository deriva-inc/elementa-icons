// Import custom components.

// Import custom utilities.

// Import custom types.
import { IconComponentProps } from '@/src/lib/types';

// Import styles.

/**
 * This function renders an SVG icon of a favorite (outline).
 */
const FavoriteOutline = ({
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
            <path d="m28.803 13.08-8.155 6.031a.8.8 0 0 0-.28.874l2.674 9.026-7.19-5.558a1 1 0 0 0-1.212 0l-7.175 5.529 2.64-9.003a.78.78 0 0 0-.272-.853l-8.318-6.105 10.092-.232a.32.32 0 0 0 .301-.216l3.374-10.795a.037.037 0 0 0-.024-.047.037.037 0 0 0-.047.023l-3.825 10.393-10.078-.233a1.06 1.06 0 0 0-1.012.714A1.075 1.075 0 0 0 .65 13.83l7.796 6.193-3.164 9.73a1.44 1.44 0 0 0 .547 1.61 1.445 1.445 0 0 0 1.71-.032l7.707-5.833 7.715 5.822a1.436 1.436 0 0 0 2.226-.678c.094-.28.105-.59.011-.886l-3.13-9.723 7.806-6.158a1.13 1.13 0 0 0 .377-1.267 1.122 1.122 0 0 0-1.067-.755l-9.978.174L15.69.64a.196.196 0 1 0-.377.109l3.151 11.842a.436.436 0 0 0 .42.317z" />
        </svg>
    );
};

export default FavoriteOutline;
