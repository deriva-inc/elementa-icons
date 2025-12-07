/**
 * This function is a custom template for converting SVG icons to React components.
 */
const iconTemplate = (
    { imports, interfaces, componentName, props, jsx, exports },
    { tpl }
) => {
    // Remove 'Svg' prefix if present to get a clean name
    const exportName = componentName.replace(/^Svg/, '');
    const cleanComponentName = componentName.substring(3);

    return tpl`
${imports};

// Import custom components.

// Import custom utilities.

// Import custom types.
import { IconComponentProps } from "@/src/lib/types";

// Import styles.

/**
 * This function renders an SVG icon.
 */
${interfaces};

const ${cleanComponentName} = ({
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

module.exports = iconTemplate;
