// Import custom components.

// Import custom utilities.

// Import custom types.
import { IconComponentProps } from '@/src/lib/types';

// Import styles.

/**
 * This function renders an SVG icon of a search.
 *
 * @version 1.1.0
 * @author Aayush Goyal
 * @created 2025-07-15
 * @modifier Aayush Goyal
 * @modified 2025-07-
 * @since 1.6.0
 */
const Search = ({
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
            viewBox="0 0 28 30"
            height={height}
            width={width}
            stroke={color}
            strokeWidth={strokeWidth}
            fill={color}
        >
            <path d="M14.781 18.142s2.109 3.26 4.141 6.269c1.105 1.635 2.195 3.177 2.844 4.116a1.94 1.94 0 0 0 1.36.776 1.975 1.975 0 0 0 1.51-.485l1.866-1.676a2 2 0 0 0 .638-1.472 1.97 1.97 0 0 0-.658-1.444c-.883-.725-2.324-1.944-3.869-3.176-2.846-2.268-5.95-4.604-5.95-4.604a.036.036 0 0 0-.052.003.037.037 0 0 0 .002.052s2.587 2.897 5.086 5.543c1.357 1.436 2.693 2.77 3.49 3.59l-.012.032-.016.003-1.843 1.702-.019.028-.05-.003c-.732-.874-1.929-2.335-3.212-3.835-2.36-2.758-4.944-5.657-4.944-5.657a.196.196 0 1 0-.312.238M15.324 3.064c1.667 1.499 2.438 3.429 2.44 5.41.002 1.88-.726 3.794-2.124 5.398-1.328 1.597-3.184 2.473-5.1 2.672a7.9 7.9 0 0 1-2.902-.23 7.6 7.6 0 0 1-2.626-1.287 7.62 7.62 0 0 1-2.965-5.023A7.82 7.82 0 0 1 3.507 4.2C4.82 2.419 6.566 1.326 8.447.955 10.408.57 12.5.951 14.41 2.132c.017.011.04.007.051-.01a.036.036 0 0 0-.01-.051C12.568.69 10.422.147 8.36.39 6.268.638 4.273 1.705 2.69 3.547 1.06 5.456.38 7.85.573 10.17c.195 2.37 1.33 4.647 3.29 6.298a9.2 9.2 0 0 0 3.231 1.74 9 9 0 0 0 3.67.319 9.23 9.23 0 0 0 6.22-3.584c1.47-2.02 2.161-4.335 1.933-6.53-.227-2.182-1.319-4.225-3.349-5.656a.196.196 0 1 0-.245.307" />
        </svg>
    );
};

export default Search;
