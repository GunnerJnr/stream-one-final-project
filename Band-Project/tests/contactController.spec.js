const fs = require('fs');
const path = require('path');

function getStoreFormData() {
  const file = fs.readFileSync(path.resolve(__dirname, '../js/controller.js'), 'utf8');
  const match = file.match(/\$scope\.storeFormData\s*=\s*function\s*\(\)\s*{([\s\S]*?)^\s*};/m);
  if (!match) {
    throw new Error('storeFormData function not found');
  }
  let body = match[1];
  body = body.replace(/\$scope\./g, 'scope.');
  return new Function('scope', body);
}

describe('ContactController storeFormData', function() {
  it('sets validation messages when form fields are empty', function() {
    const storeFormData = getStoreFormData();
    const scope = { collectFormData: {} };
    storeFormData(scope);
    expect(scope.firstNameRequired).toBe('First Name Required');
    expect(scope.lastNameRequired).toBe('Last Name Required');
    expect(scope.emailRequired).toBe('E-mail Required');
  });
});
