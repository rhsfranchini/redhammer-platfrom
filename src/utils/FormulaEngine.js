// src/utils/FormulaEngine.js
import { Parser } from 'expr-eval';

const FormulaEngine = {
  parser: null,
  
  init() {
    this.parser = new Parser();
    this.parser.functions.LOOKUP = this.LOOKUP.bind(this);
    this.parser.functions.IF = (c, t, f) => c ? t : f;
    this.parser.functions.ROUND = (n, d = 0) => Math.round(n * Math.pow(10, d)) / Math.pow(10, d);
    this.parser.functions.MIN = Math.min;
    this.parser.functions.MAX = Math.max;
  },
  
  LOOKUP(key, ...pairs) {
    for (let i = 0; i < pairs.length - 1; i += 2) {
      if (key === pairs[i]) return pairs[i + 1];
    }
    return pairs.length % 2 === 1 ? pairs[pairs.length - 1] : 0;
  },
  
  evaluate(formula, variables, varTables) {
    if (!formula || !this.parser) return 0;
    try {
      const scope = { ...variables };
      const expr = this.parser.parse(formula);
      return expr.evaluate(scope);
    } catch (e) {
      return 0;
    }
  },
  
  validate(formula) {
    if (!formula || !this.parser) return { valid: true };
    try {
      this.parser.parse(formula);
      return { valid: true };
    } catch (e) {
      return { valid: false, error: e.message };
    }
  }
};

FormulaEngine.init();

export default FormulaEngine;
