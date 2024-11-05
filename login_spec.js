// cypress/integration/login_spec.js
describe('Login Page Test', () => {
    beforeEach(() => {
      cy.visit('https://baridez.github.io/login.html'); // Change this to your actual login page URL
    });
  
    it('should successfully log in with valid credentials', () => {
      cy.get('#username').type('testuser'); // Test with a valid username
      cy.get('#password').type('testpass'); // Test with a valid password
      cy.get('#login-form').submit(); // Submit the form
      cy.contains('Login successful!'); // Check for success message
    });
  
    it('should show an error message for invalid credentials', () => {
      cy.get('#username').type('invaliduser'); // Test with an invalid username
      cy.get('#password').type('invalidpass'); // Test with an invalid password
      cy.get('#login-form').submit(); // Submit the form
      cy.contains('Invalid username or password.'); // Check for error message
    });
  });
  