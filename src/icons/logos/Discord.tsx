// Import custom components.

// Import custom utilities.

// Import custom types.
import { IconComponentProps } from '@/src/lib/types';

// Import styles.

/**
 * This function renders an SVG icon of the Discord logo.
 */
const Discord = ({
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
            viewBox="0 0 31 24"
            height={height}
            width={width}
            stroke={color}
            strokeWidth={strokeWidth}
            fill={color}
        >
            <path
                d="M777.332 387.352c1.772-.932 3.856-1.57 6.28-1.887a.22.22 0 0 1 .239.156l.292.993a.586.586 0 0 0 .631.415c2.07-.239 4-.226 5.8.022a.59.59 0 0 0 .606-.317l.56-1.113a.22.22 0 0 1 .232-.119c2.098.34 4.072.937 5.888 1.863.931-.053 6.484 14.468 4.448 16.631-1.775 1.884-7.303 4.3-7.536 3.974-.807-.484-1.257-1.221-1.474-2.123a.545.545 0 0 1 .292-.614c.523-.26 1.46-.717 1.858-.911a.16.16 0 0 0 .088-.112.16.16 0 0 0-.037-.138l-.23-.266a.16.16 0 0 0-.172-.047c-4.738 1.563-9.68 1.622-14.854-.028a.11.11 0 0 0-.099.018l-.425.337a.11.11 0 0 0-.041.094.11.11 0 0 0 .058.086l1.839.959a.55.55 0 0 1 .269.657c-.227.669-.569 1.282-1.096 1.804a.84.84 0 0 1-.702.23c-2.308-.332-4.522-1.351-6.609-3.285a1.46 1.46 0 0 1-.466-1.022c-.182-5.94 1.106-11.143 3.976-15.55zm5.56 7.4c1.456 0 2.733 1.411 2.733 3.149 0 1.739-1.277 3.15-2.733 3.15s-2.824-1.446-2.764-3.183c.06-1.727 1.062-2.809 2.552-3.108zm9.669 0c1.456 0 2.721 1.433 2.721 3.171s-1.265 3.128-2.721 3.128-2.792-1.413-2.732-3.15c.061-1.727 1.03-2.842 2.52-3.141z"
                style={{
                    fill: '#7289d9'
                }}
                transform="matrix(1 0 0 1 -771.954 -384.462)"
            />
        </svg>
    );
};

export default Discord;
