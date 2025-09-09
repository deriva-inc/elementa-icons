// Import custom components.

// Import custom utilities.

// Import custom types.
import { IconComponentProps } from '@/src/lib/types';

// Import styles.

/**
 * This function renders an SVG icon of a favorite (filled).
 */
const FavoriteFilled = ({
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
            viewBox="0 0 32 31"
            height={height}
            width={width}
            stroke={color}
            strokeWidth={strokeWidth}
            fill={color}
        >
            <path d="M14.92 1.216a.75.75 0 0 1 1.427 0l3.282 10.102h10.62c.326 0 .614.21.715.518s-.01.648-.274.84l-8.592 6.241 3.283 10.102a.75.75 0 0 1-1.155.838l-8.592-6.242-8.593 6.242a.75.75 0 0 1-1.154-.838l3.282-10.102S3.584 14.861.577 12.675a.75.75 0 0 1-.273-.839c.1-.309.389-.518.713-.518h10.621z" />
            <path
                d="M373.453 73.799a.52.52 0 0 1 .488-.376c.222 0 .419.152.487.376l2.244 7.331h7.261c.222 0 .419.152.488.376a.565.565 0 0 1-.187.609l-5.874 4.53 2.244 7.331a.56.56 0 0 1-.186.608.49.49 0 0 1-.603 0l-5.874-4.53-5.875 4.53a.49.49 0 0 1-.602 0 .56.56 0 0 1-.187-.608l2.244-7.331-5.874-4.53a.565.565 0 0 1-.187-.609.52.52 0 0 1 .488-.376h7.261zm.226.078a.3.3 0 0 1 .1-.146.27.27 0 0 1 .162-.056q.09.002.161.056a.3.3 0 0 1 .1.146l2.244 7.331a.24.24 0 0 0 .226.174h7.261q.091.001.162.056a.3.3 0 0 1 .1.146.3.3 0 0 1 0 .181.3.3 0 0 1-.1.146l-5.874 4.53a.26.26 0 0 0-.087.282l2.244 7.331a.3.3 0 0 1-.1.326.261.261 0 0 1-.324 0l-5.874-4.53a.23.23 0 0 0-.279 0l-5.874 4.53a.26.26 0 0 1-.162.056.26.26 0 0 1-.162-.056.3.3 0 0 1-.1-.146.3.3 0 0 1 0-.18l2.244-7.331a.26.26 0 0 0-.086-.282l-5.875-4.53a.3.3 0 0 1-.1-.146.3.3 0 0 1 0-.181.3.3 0 0 1 .1-.146.26.26 0 0 1 .162-.056h7.261a.24.24 0 0 0 .226-.174z"
                style={{
                    fill: 'none'
                }}
                transform="matrix(1.46273 0 0 1.37794 -531.34 -100.474)"
            />
        </svg>
    );
};

export default FavoriteFilled;
