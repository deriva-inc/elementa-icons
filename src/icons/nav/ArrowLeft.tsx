// Import custom components.

// Import custom utilities.

// Import custom types.
import { IconComponentProps } from '@/src/lib/types'; // Import styles.

/**
 * This function renders an SVG icon of a left arrow.
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2025-07-13
 * @modifier
 * @modified
 * @since 1.3.0
 */
const ArrowLeft = ({
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
            viewBox="0 0 29 25"
            height={height}
            stroke={color}
            strokeWidth={strokeWidth}
            width={width}
            fill={color}
        >
            <path d="M14.898 24.549s-3.822-3.77-7.4-7.172a188 188 0 0 0-2.508-2.341c-1.03-.947-1.934-1.748-2.545-2.3l.002-.003-.003-.005c1.065-.983 3.022-2.746 5.042-4.654C11.075 4.686 14.898.916 14.898.916a.244.244 0 0 0-.32-.367s-4.267 3.258-8.123 6.337C4.282 8.62 2.263 10.31 1.14 11.226a1.988 1.988 0 0 0 0 3.013c.631.528 1.551 1.31 2.632 2.199.821.674 1.73 1.412 2.67 2.156a648 648 0 0 0 8.136 6.322.244.244 0 0 0 .32-.367" />
            <path d="M5.528 12.976s1.067.113 2.763.26c1.15.099 2.572.225 4.145.325a91 91 0 0 0 2.763.135c.609.02 1.225.038 1.842.036a51 51 0 0 0 1.842-.042 164.882 164.882 0 0 0 5.526-.349c2.47-.198 4.144-.365 4.144-.365a.243.243 0 0 0 0-.487s-1.674-.166-4.144-.364c-.844-.068-1.773-.137-2.763-.2-.888-.056-1.815-.113-2.763-.15a49 49 0 0 0-1.842-.042 51 51 0 0 0-1.842.036c-.95.033-1.877.078-2.763.135-1.573.1-2.995.226-4.145.326-1.696.146-2.763.259-2.763.259a.243.243 0 0 0 0 .487" />
        </svg>
    );
};

export default ArrowLeft;
