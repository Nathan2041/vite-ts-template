/** @type {import('eslint').ESLint.Plugin} */
export default {
  rules: {
    'explicit-typing': {
      meta: {
        type: /** @type {const} */ ('suggestion'),
        docs: { 
          description: 'Require explicit typing via annotation or assertion',
          recommended: false
        },
        messages: { 
          missingType: 'Variable must have explicit type annotation or assertion' 
        },
        schema: []
      },
      create(context) {
        return {
          VariableDeclarator(node) {
            if (node.id.typeAnnotation) return;
            if (node.init && node.init.type === 'TSAsExpression') return;
            if (node.id.type !== 'Identifier') return;
            if (node.init && (node.init.type === 'ArrowFunctionExpression' || node.init.type === 'FunctionExpression')) return;
            
            context.report({ node: node.id, messageId: 'missingType' });
          }
        };
      }
    }
  }
};
