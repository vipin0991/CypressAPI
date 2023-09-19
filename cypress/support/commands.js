// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('getAPI', (pathparam,headers) => { 
    cy.request({
        method : 'GET',
        url : ''+pathparam,
        headers:headers

    })
 })

Cypress.Commands.add('postAPI',(url,payload)=>{
    cy.request({
        method:'POST',
        url:url,
        headers:            {
            Authorization:'Bearer c93dbb38aebc2ce7a25849ed206c8fe1d1164eafcaaac0adedbe5cf7be0892f1'
        },
        body:payload
    })
})

Cypress.Commands.add('putAPI',(url,headers,payload)=>{
    cy.request({
        method:'PUT',
        url:url,
        headers:headers,
        body:payload
    })
})

Cypress.Commands.add('deleteAPI',(url,headers)=>{
    cy.request({
        method:'DELETE',
        url:url,
        headers:headers,
    })
})



//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })