///<reference types='cypress' />
describe("API automation",()=>{
    it('Get Users',()=>{
        cy.request({
            method:'GET',
            url:'https://gorest.co.in/public/v2/users',
            headers:{
                Authorization : 'Bearer c93dbb38aebc2ce7a25849ed206c8fe1d1164eafcaaac0adedbe5cf7be0892f1'
                }
        }).then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(200)
        })
    })

    it('Get Specific User',()=>{
        cy.request({
            method:'GET',
            url:'https://gorest.co.in/public/v2/users/5171300',
            headers:{
                Authorization : 'Bearer c93dbb38aebc2ce7a25849ed206c8fe1d1164eafcaaac0adedbe5cf7be0892f1'
                }
        }).then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(200)
            expect(response.body.id).to.equal(5171300)
        })
    })

    it('Invalid URL',()=>{
        cy.request({
            method:'GET',
            url:'https://gorest.co.in/public/v2/user',
            headers:{
                Authorization : 'Bearer c93dbb38aebc2ce7a25849ed206c8fe1d1164eafcaaac0adedbe5cf7be0892f1'
                },
            failOnStatusCode: false
            
        }).then((response)=>{
            // cy.log(JSON.stringify(response))
            expect(response.status).to.equal(404)
        })
    })

    it('Invalid User',()=>{
        cy.request({
            method:'GET',
            url:'https://gorest.co.in/public/v2/users/00171300',
            headers:{
                Authorization : 'Bearer c93dbb38aebc2ce7a25849ed206c8fe1d1164eafcaaac0adedbe5cf7be0892f1'
                },
            failOnStatusCode: false
        }).then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(404)
            // expect(response.body.id).to.equal(5171300)
        })
    })
})