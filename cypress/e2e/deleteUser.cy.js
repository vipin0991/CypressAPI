import payld from '../config/payload.json'

describe('Create and Delete User',()=>{
    function generateRandomEmail(){
        const randomString = Math.random().toString(36).substring(2,10)
        const email = randomString+'@dispostable.com'
        return email
    }


    it('Create User via POST',()=>{
        let emailAdd = generateRandomEmail()
        payld.email = emailAdd

        cy.request({
            method : 'POST',
            url : 'https://gorest.co.in/public/v2/users',
            headers : {
                Authorization : 'Bearer c93dbb38aebc2ce7a25849ed206c8fe1d1164eafcaaac0adedbe5cf7be0892f1'
            },
            body : payld
        }).then((response)=>{
            expect(response.status).to.be.equal(201)

            let id = response.body.id

            cy.request({
                method : 'DELETE',
                url : 'https://gorest.co.in/public/v2/users/'+id,
                headers:{
                    Authorization : 'Bearer c93dbb38aebc2ce7a25849ed206c8fe1d1164eafcaaac0adedbe5cf7be0892f1'
                }
            }).then((response)=>{
                expect(response.status).to.be.equal(204)
            })

            cy.request({
                method : 'GET',
                url : 'https://gorest.co.in/public/v2/users/'+id,
                headers:{
                    Authorization : 'Bearer c93dbb38aebc2ce7a25849ed206c8fe1d1164eafcaaac0adedbe5cf7be0892f1'
                },
                failOnStatusCode:false
            }).then((response)=>{
                expect(response.status).to.be.equal(404)
            })
        })
    })
})