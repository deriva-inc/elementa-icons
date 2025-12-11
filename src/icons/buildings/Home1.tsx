// Import custom components.

// Import custom utilities.

// Import custom types.
import { IconComponentProps } from '@/src/lib/types';

// Import styles.

/**
 * This function renders an SVG icon.
 */
const Home1 = ({
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
            viewBox="0 0 27 31"
            height={height}
            width={width}
            stroke={color}
            strokeWidth={strokeWidth}
            fill={color}
        >
            <path d="M13.404.901 13.308.9a1.93 1.93 0 0 0-1.358.576L1.15 12.741a1.63 1.63 0 0 0-.458 1.152l.325 13.596c.016.627.277 1.19.698 1.59.414.394.974.636 1.59.621l.561-.014.008-.016c.035-.075.161-.37-.064-.378l-.505-.014a1.76 1.76 0 0 1-1.234-.553 1.72 1.72 0 0 1-.47-1.236l.324-13.596a.37.37 0 0 1 .124-.258L13.251 2.77l.06-.014.044.026c1.091 1.111 3.278 3.365 5.456 5.554 2.367 2.38 4.72 4.686 5.524 5.484l.02.027.275 13.617c.01.37-.12.714-.357.963a1.38 1.38 0 0 1-.963.442l-18.002.573a.037.037 0 1 0 0 .074l18.003.542a2.6 2.6 0 0 0 1.862-.73 2.65 2.65 0 0 0 .814-1.864l.274-13.617a1.9 1.9 0 0 0-.144-.748 2 2 0 0 0-.42-.638c-.797-.806-3.099-3.163-5.474-5.535-2.185-2.182-4.435-4.372-5.543-5.465a1.94 1.94 0 0 0-1.276-.559" />
        </svg>
    );
};

export default Home1;
