describe('Formulário de Cadastro de Usuário', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5500/index.html');
    });
  
    it('Acessa a página do formulário', () => {
      cy.get('form#cadastro').should('be.visible');
    });
  
    it('Preenche o campo Nome corretamente', () => {
      cy.get('#nome').type('João Silva').should('have.value', 'João Silva');
    });
  
    it('Preenche o campo E-mail corretamente', () => {
      cy.get('#email').type('joao.silva@email.com').should('have.value', 'joao.silva@email.com');
    });
  
    it('Preenche o campo Telefone corretamente com 10 dígitos', () => {
      cy.get('#telefone').type('1199999999').should('have.value', '1199999999');
    });
  
    it('Preenche o campo Senha corretamente', () => {
      cy.get('#senha').type('Teste@123').should('have.value', 'Teste@123');
    });
  
    it('Preenche o campo Confirmar Senha corretamente', () => {
      cy.get('#confirma_senha').type('Teste@123').should('have.value', 'Teste@123');
    });
  
    it('Submete o formulário e verifica o envio', () => {
      cy.window().then((win) => {
        cy.stub(win, 'alert').as('alerta');
      });
  
      cy.get('#nome').type('João Silva');
      cy.get('#email').type('joao.silva@email.com');
      cy.get('#telefone').type('1199999999');
      cy.get('#senha').type('Teste@123');
      cy.get('#confirma_senha').type('Teste@123');
  
      cy.get('form#cadastro').submit();
  
      cy.get('@alerta').should('have.been.calledWith', 'Cadastro realizado com sucesso!');
    });
  });
  