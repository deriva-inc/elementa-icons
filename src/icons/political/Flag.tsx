// Import custom components.

// Import custom utilities.

// Import custom types.
import { IconComponentProps } from '@/src/lib/types';

// Import styles.

/**
 * This function renders an SVG icon of a flag.
 */
const Flag = ({
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
            viewBox="0 0 22 32"
            height={height}
            width={width}
            stroke={color}
            strokeWidth={strokeWidth}
            fill={color}
        >
            <path d="M2.314 5.158c1.3.012 5.133.076 8.98.085 2.88.007 5.767-.018 7.606-.034l-3.67 4.596a1.49 1.49 0 0 0 .012 1.898l4.39 5.09-16.56.527a.037.037 0 0 0-.038.037c0 .02.017.037.037.037l17.185.527a.87.87 0 0 0 .872-.973.9.9 0 0 0-.19-.453l-4.449-5.71 4.72-5.474a1.226 1.226 0 0 0 .17-1.293 1.22 1.22 0 0 0-1.103-.707c-1.428-.011-5.211-.064-8.98-.064-3.549 0-7.086.045-8.633.06L2.373.956a.87.87 0 0 0-1.737.093s.054 4.021.16 9.143c.189 8.981.515 21.334.515 21.334a.196.196 0 0 0 .393 0s.326-12.353.513-21.334c.039-1.873.071-3.598.097-5.034" />
        </svg>
    );
};

export default Flag;
