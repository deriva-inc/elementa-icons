// Import global from third party libraries.

// Import custom components.

// Import custom utilities.

// Import custom types.
import type { Template } from '@/src/lib/types';

// Import styles.

/**
 * This function is a custom template for converting SVG icons to React components.
 *
 * @version 1.1.0
 * @author Aayush Goyal
 * @created 2025-07-13
 * @modifier Aayush Goyal
 * @modified 2025-07-15
 * @since 1.1.0
 */
const iconTemplate: Template = (
    { imports, interfaces, componentName, props, jsx, exports },
    { tpl }
) => {
    console.log(props);
    // Remove 'Svg' from the export name if present
    const exportName = componentName.replace(/^Svg/, '');

    return tpl`
${imports};

// Import custom components.

// Import custom utilities.

// Import custom types.
import { IconComponentProps } from "@/src/lib/types";

// Import styles.

/**
 * This function renders an SVG icon of an {auto-generated}.
 * 
 * @version 1.0.0
 * @author Aayush Goyal
 * @created Auto-generated
 * @modifier
 * @modified
 * @since 1.x.0
 */

${interfaces};

const ${componentName.substring(3)} = ({
    color = '#000000',
    height = '1em',
    strokeWidth = 1,
    width = '1em'
}: IconComponentProps) => {
  return (
    ${jsx}
  )
};
export default ${exportName};
`;
};

export default iconTemplate;
