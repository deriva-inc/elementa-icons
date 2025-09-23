// Import custom components.

// Import custom utilities.

// Import custom types.
import { IconComponentProps } from '@/src/lib/types';

// Import styles.

/**
 * This function renders an SVG icon of an airplane.
 */
const Airplane = ({
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
            viewBox="0 0 31 31"
            height={height}
            width={width}
            stroke={color}
            strokeWidth={strokeWidth}
            fill={color}
        >
            <path d="m25.73 28.483-.35.367-7.412-11.648a.914.914 0 0 0-1.402-.159l-6.755 6.475a.97.97 0 0 0-.265.936l.834 3.342-.166.165-2.59-3.326a1 1 0 0 0-.182-.18L4.136 21.95l.183-.212 3.227.697a.93.93 0 0 0 .894-.281l6.484-7.303a.8.8 0 0 0-.19-1.23L2.25 6.734l.87-1.034.047-.027 14.83 4.157.023-.07-14.59-4.935a.96.96 0 0 0-.998.267l-1.35 1.452a.508.508 0 0 0 .127.777l11.866 7.164-5.636 6.009-2.973-.703a1.47 1.47 0 0 0-1.428.46l-.713.798a1.48 1.48 0 0 0-.186 1.7c.097.176.232.332.395.457l3.591 2.758 3.209 4.105a.998.998 0 0 0 1.488.091l1.352-1.36a.99.99 0 0 0 .259-.943l-.867-3.344 5.485-5.387L24.6 30.53a.78.78 0 0 0 1.222.11l1.119-1.214a1.26 1.26 0 0 0 .283-1.233L22.35 12.891l6.818-7.444a.4.4 0 0 0 .046-.057s.946-1.48 1.093-2.661c.072-.58-.042-1.094-.417-1.423-.372-.327-.926-.38-1.534-.22-1.212.317-2.666 1.433-2.666 1.433l-.035.03-7.022 7.23.278.279 7.194-7.019c.132-.094 1.121-.794 2.071-1.127.468-.164.924-.28 1.194-.03.256.238.18.647.063 1.066-.234.843-.803 1.728-.928 1.918l-7.008 7.287a1.07 1.07 0 0 0-.247 1.04z" />
        </svg>
    );
};

export default Airplane;
