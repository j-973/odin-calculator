const add = (a, b) => {
    return a + b;
  };
  
  const subtract = (a, b) => {
    return a - b;
  };
  
  const multiply = (a, b) => {
    return a * b;
  };
  
  const divide = (numerator, denominator) => {
    if (denominator === 0) {
      return 'Error: Cannot divide by zero';
    }
    return numerator / denominator;
  };