// Import custom components.

// Import custom utilities.

// Import custom types.
import { IconComponentProps } from '@/src/lib/types';

/**
 * This function renders an SVG icon of a left arrow.
 */
const ArrowRight = ({
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
            width={width}
            stroke={color}
            strokeWidth={strokeWidth}
            fill={color}
        >
            <path d="M14.002.92s3.823 3.77 7.4 7.173c.868.826 1.725 1.623 2.508 2.34 1.03.948 1.934 1.749 2.546 2.3l-.003.004.004.005c-1.065.983-3.022 2.746-5.043 4.654-3.588 3.388-7.412 7.158-7.412 7.158a.244.244 0 0 0 .32.367s4.267-3.258 8.124-6.337c2.172-1.734 4.192-3.424 5.314-4.341a1.988 1.988 0 0 0 .001-3.012c-.632-.528-1.552-1.311-2.633-2.2-.82-.673-1.729-1.411-2.67-2.155C18.59 3.81 14.322.554 14.322.554a.244.244 0 0 0-.32.367" />
            <path d="M23.373 12.494s-1.068-.113-2.764-.26c-1.15-.1-2.571-.225-4.144-.325a91 91 0 0 0-2.763-.135 49 49 0 0 0-1.842-.036c-.617 0-1.233.019-1.842.042a164.883 164.883 0 0 0-5.526.349c-2.47.198-4.145.365-4.145.365a.243.243 0 0 0 0 .487s1.674.166 4.145.364c.844.068 1.773.137 2.763.2.887.056 1.814.113 2.763.149a49 49 0 0 0 1.842.043c.617 0 1.233-.015 1.842-.036a94 94 0 0 0 2.763-.135c1.573-.1 2.994-.226 4.144-.326 1.696-.146 2.764-.26 2.764-.26a.243.243 0 0 0 0-.486" />
        </svg>
    );
};
export default ArrowRight;
