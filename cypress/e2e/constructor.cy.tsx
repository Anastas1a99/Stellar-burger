/// <reference types="cypress" />

describe('Страница конструктора', () => {
  describe('Без авторизации', () => {
    beforeEach(() => {
      cy.intercept('GET', '/api/ingredients', {
        fixture: 'ingredients.json'
      }).as('getIngredients');

      cy.visit('http://localhost:4000');
    });

    describe('Сборка бургера', () => {
      it('Должен добавлять ингридиенты в конструктор при клике на кнопку добавления ингредиента', () => {
        // Проверяем что ингредиентов нет в конструкторе перед добавлением
        cy.contains('Оформить заказ')
          .parent()
          .parent('section')
          .within(() => {
            cy.contains('Биокотлета из марсианской Магнолии').should('not.exist');
            cy.contains('Краторная булка N-200i').should('not.exist');
          });

        // Добавляем ингредиенты
        cy.contains('Биокотлета из марсианской Магнолии')
          .parent()
          .find('button')
          .click();

        cy.contains('Краторная булка N-200i').parent().find('button').click();

        // Проверяем что ингредиенты появились в конструкторе
        cy.contains('Оформить заказ')
          .parent()
          .parent('section')
          .within(() => {
            cy.contains('Биокотлета из марсианской Магнолии').should('exist');
            cy.contains('Краторная булка N-200i').should('exist');
            cy.contains('2934').should('exist');
          });
      });

      it('Должен удалять ингридиенты из конструктора при клике на кнопку удаления ингредиента', () => {
        // Добавляем ингредиенты
        cy.contains('Биокотлета из марсианской Магнолии')
          .parent()
          .find('button')
          .click();

        cy.contains('Краторная булка N-200i').parent().find('button').click();

        // Проверяем что ингредиенты есть в конструкторе
        cy.contains('Оформить заказ')
          .parent()
          .parent('section')
          .within(() => {
            cy.contains('Биокотлета из марсианской Магнолии').should('exist');
            
            // Удаляем ингредиент
            cy.contains('Биокотлета из марсианской Магнолии')
              .parent()
              .find('.constructor-element__action')
              .click();

            // Проверяем что ингредиент удалился
            cy.contains('Биокотлета из марсианской Магнолии').should('not.exist');
            cy.contains('2510').should('exist');
          });
      });
    });

    describe('Модальное окно ингредиента', () => {
      beforeEach(() => {
        cy.contains('Биокотлета из марсианской Магнолии').parent().click();
      });

      it('Должен открывать модальное окно при клике на карточку ингридиента', () => {
        cy.get('#modals')
          .contains('Биокотлета из марсианской Магнолии')
          .should('exist');
      });

      it('Должен закрывать модальное окно при клике на крестик', () => {
        cy.get('#modals').find('button').click();

        cy.get('#modals').should('not.contain.html');
      });

      it('Должен закрывать модальное окно при клике вне окна', () => {
        cy.get('#modals').parent().click('topRight');
      });
    });
  });

  describe('С авторизацией', () => {
    beforeEach(() => {
      cy.setCookie('accessToken', 'testAccessToken');

      cy.window().then((window) => {
        window.localStorage.setItem('refreshToken', 'testRefresh');
      });

      cy.intercept('GET', '/api/auth/user', {
        fixture: 'user.json'
      }).as('getUser');
      cy.intercept('GET', '/api/ingredients', {
        fixture: 'ingredients.json'
      }).as('getIngredients');

      cy.visit('http://localhost:4000');
    });

    afterEach(() => {
      cy.clearCookie('accessToken');

      cy.window().then((window) => {
        window.localStorage.removeItem('refreshToken');
      });
    });

    it('Должен делать заказ', () => {
      cy.intercept('POST', '/api/orders', {
        fixture: 'order.json',
        delay: 100
      }).as('postOrder');

      // Проверяем что конструктор пустой
      cy.contains('Оформить заказ').parent().contains('0').should('exist');

      // Добавляем ингредиенты
      cy.contains('Филе Люминесцентного тетраодонтимформа')
        .parent()
        .find('button')
        .click();

      cy.contains('Соус фирменный Space Sauce')
        .parent()
        .find('button')
        .click();

      cy.contains('Краторная булка N-200i').parent().find('button').click();

      cy.contains('Оформить заказ').click();

      cy.contains('Оформляем заказ...').should('exist');

      cy.wait('@postOrder').then(() => {
        cy.get('#modals').contains('79054').should('exist');
        cy.get('#modals').parent().click('topRight');
        cy.get('#modals').should('not.contain.html');

        // Проверяем что конструктор очистился после заказа
        cy.contains('Выберите булки').should('exist');
        cy.contains('Выберите начинку').should('exist');
        cy.contains('Оформить заказ').parent().contains('0').should('exist');
      });
    });
  });
});