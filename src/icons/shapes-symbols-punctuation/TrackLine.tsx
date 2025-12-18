// Import custom components.

// Import custom utilities.

// Import custom types.
import { IconComponentProps } from '@/src/lib/types';

// Import styles.

/**
 * This function renders a track line.
 */
const TrackLine = ({
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
            viewBox="0 0 31 30"
            height={height}
            width={width}
            stroke={color}
            strokeWidth={strokeWidth}
            fill={color}
        >
            <path d="m.394 16.42 3.358.128a.65.65 0 0 1 .551.358l1.9 3.568a.5.5 0 0 0 .91-.095l2.513-7.003c.403 1.682.958 3.978 1.53 6.27 1.102 4.423 2.266 8.829 2.266 8.829a.993.993 0 0 0 1.937-.07s1.185-6.73 2.326-13.468c.647-3.823 1.279-7.647 1.706-10.241l1.923 10.722a1.24 1.24 0 0 0 1.238 1.028l7.788-.185c.02 0 .036-.017.036-.037a.037.037 0 0 0-.036-.037l-7.788-.185a.77.77 0 0 1-.737-.662L19.924 1.262a.566.566 0 0 0-1.115-.015s-1.395 6.689-2.746 13.39c-.668 3.313-1.325 6.628-1.819 9.133a628 628 0 0 0-1.234-4.607c-1.198-4.398-2.457-8.778-2.457-8.778a.796.796 0 0 0-1.528-.046l-2.554 8.672-1.537-2.469a1.35 1.35 0 0 0-1.182-.642l-3.358.128a.196.196 0 0 0 0 .392" />
        </svg>
    );
};

export default TrackLine;
