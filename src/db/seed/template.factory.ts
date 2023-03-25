import { Template } from '../../template/template.entity';
import { setSeederFactory } from 'typeorm-extension';

export const TemplateFactory = setSeederFactory(Template, () => {
  const template = new Template();
  template.name = 'first';
  template.layout = `

  `;
  return template;
});
