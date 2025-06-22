// Import global from third party libraries.

// Import custom components.

// Import custom utilities.

// Import custom types.

// Import styles.

/**
 * This function renders an SVG icon of an arrow pointing downwards.
 * 
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2025-06-22
 * @modifier
 * @modified
 * @since 1.1.0
 */
const ArrowDown = (props: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinejoin: "round",
            strokeMiterlimit: 2,
            }}
            viewBox="0 0 26 29"
            {...props}
        >
            <path
                d="M246.127 405.463h24.487v28.348h-24.487z"
                style={{
                    fill: "none",
                }}
                transform="matrix(1.00017 0 0 1.00024 -245.579 -405.18)"
            />
            <path d="M1.02 14.836s3.77-3.823 7.173-7.4c.826-.868 1.623-1.725 2.34-2.508.948-1.03 1.749-1.934 2.3-2.546l.004.003.005-.004c.983 1.065 2.746 3.022 4.654 5.043 3.388 3.588 7.158 7.412 7.158 7.412a.244.244 0 0 0 .367-.32s-3.258-4.267-6.337-8.124C16.95 4.22 15.26 2.201 14.343 1.078a1.988 1.988 0 0 0-3.012-.001c-.528.632-1.311 1.552-2.2 2.633-.673.82-1.411 1.729-2.155 2.67a648.25 648.25 0 0 0-6.322 8.136.244.244 0 0 0 .367.32Z" />
            <path d="M12.594 5.466s-.113 1.067-.26 2.763c-.1 1.15-.225 2.571-.325 4.144a91.07 91.07 0 0 0-.135 2.763 48.872 48.872 0 0 0-.036 1.842c0 .617.019 1.233.042 1.842a164.882 164.882 0 0 0 .349 5.526c.198 2.47.365 4.145.365 4.145a.243.243 0 0 0 .487 0s.166-1.674.364-4.145c.068-.844.137-1.773.2-2.763.056-.887.113-1.814.149-2.763a48.82 48.82 0 0 0 .043-1.842 51.077 51.077 0 0 0-.036-1.842 94.437 94.437 0 0 0-.135-2.763c-.1-1.573-.226-2.994-.326-4.144-.146-1.696-.26-2.763-.26-2.763a.243.243 0 0 0-.486 0Z" />
        </svg>
    );
}

export default ArrowDown;
