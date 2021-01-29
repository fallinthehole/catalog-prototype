export const constructHTML = ({
  tag = 'div',
  content = '',
  attrs = "",
  styles = {},
  className = 'custom-element',
  subContent = undefined
}) => {
  const element = $(
    `<${tag} ${attrs}>
      <div class="content">
        ${content}      
      </div>
    </${tag}>`
  );

  !!subContent && subContent.forEach(html => element.append(html));

  element.css({ ...styles }).addClass(className);

  return element;
}
