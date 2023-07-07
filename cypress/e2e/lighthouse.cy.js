describe('Lighthouse Kafka Metrics Dashboard', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the navigation bar', () => {
    cy.get('nav').should('be.visible');
  });

  it('displays Received Bytes chart', () => {
    cy.get('#styles.card')
      .find('h2')
      .contains('Received Bytes')
      .should('be.visible');
    cy.get('#styles.card')
      .find('canvas')
      .should('be.visible');
  });

  it('displays Retained Bytes chart', () => {
    cy.get('#styles.card')
      .find('h2')
      .contains('Retained Bytes')
      .should('be.visible');
    cy.get('#styles.card')
      .find('canvas')
      .should('be.visible');
  });

  it('displays Active Connection Count component', () => {
    cy.get('#styles.card')
      .contains('Active Connections')
      .should('be.visible');
    cy.get('#styles.card')
      .find('div')
      .contains(/^\d+$/) // Check for a number
      .should('be.visible');
  });

  it('displays Partition Count component', () => {
    cy.get('#styles.card')
      .contains('Partition Count')
      .should('be.visible');
    cy.get('#styles.card')
      .find('div')
      .contains(/^\d+$/) // Check for a number
      .should('be.visible');
  });

  it('displays Received Records component', () => {
    cy.get('#styles.card')
      .contains('Received Records')
      .should('be.visible');
    cy.get('#styles.card')
      .find('div')
      .contains(/^\d+$/) // Check for a number
      .should('be.visible');
  });

  it('displays Successful Authentication Count component', () => {
    cy.get('#styles.card')
      .contains('Successful Authentication Count')
      .should('be.visible');
    cy.get('#styles.card')
      .find('div')
      .contains(/^\d+$/) // Check for a number
      .should('be.visible');
  });

});

