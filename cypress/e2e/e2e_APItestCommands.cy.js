/// <reference types='cypress' />

describe('API automation In Cypress',()=>{
    it('Using Custom Commands',()=>{

        let payld = {
            "name" : "V9TestUserW4500",
            "email" : "v9ssampleW45800@gmail.com",
            "gender" : "male",
            "status" : "active"
          }
         
        cy.postAPI(
            'https://gorest.co.in/public/v2/users',
            payld
            ).then((response)=>{
                expect(response.status).to.be.equal(201)

                let userid = response.body.id

                cy.getAPI(userid,{Authorization:'Bearer c93dbb38aebc2ce7a25849ed206c8fe1d1164eafcaaac0adedbe5cf7be0892f1'                    }
                ).then((response)=>{
                    expect(response.status).to.be.equal(200)
                })

                cy.putAPI(
                    'https://gorest.co.in/public/v2/users/'+userid,
                    {
                        Authorization:'Bearer c93dbb38aebc2ce7a25849ed206c8fe1d1164eafcaaac0adedbe5cf7be0892f1'
                    }
                ).then((response)=>{
                    expect(response.status).to.be.equal(200)
                })

                cy.deleteAPI(
                    'https://gorest.co.in/public/v2/users/'+userid,
                    {
                        Authorization:'Bearer c93dbb38aebc2ce7a25849ed206c8fe1d1164eafcaaac0adedbe5cf7be0892f1'
                    }
                ).then((response)=>{
                    expect(response.status).to.be.equal(204)
                })
            })
    })
})