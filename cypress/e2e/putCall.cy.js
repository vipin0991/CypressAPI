///<reference types='cypress' />
import payload from '../config/payload.json'
import putpayload from '../config/putpayload.json'

describe('Put call',()=>{
    it("Put Using JSON",()=>{

        cy.request({
            method : 'PUT',
            url : 'https://gorest.co.in/public/v2/users/5179970',
            headers : {
                Authorization: 'Bearer c93dbb38aebc2ce7a25849ed206c8fe1d1164eafcaaac0adedbe5cf7be0892f1'
            },
            body:putpayload
        }).then((response)=>{
            expect(response.status).to.be.equal(200)
            expect(response.body).has.property('name','TestVBBC61')
        })
})
    it("End to End Flow",()=>{

        payload.email = 'rand129xyz@dispostable.com'

        cy.request({
            method : 'POST',
            url : 'https://gorest.co.in/public/v2/users',
            headers : {
                Authorization: 'Bearer c93dbb38aebc2ce7a25849ed206c8fe1d1164eafcaaac0adedbe5cf7be0892f1'
            },
            body:payload
        }).then((response)=>{
                let id = response.body.id
            
                cy.request({
                    method : 'PUT',
                    url : 'https://gorest.co.in/public/v2/users/'+id,
                    headers : {
                        Authorization: 'Bearer c93dbb38aebc2ce7a25849ed206c8fe1d1164eafcaaac0adedbe5cf7be0892f1'
                    },
                    body:putpayload
                }).then((response)=>{
                    expect(response.status).to.be.equal(200)
                    // expect(response.body).has.property('name','TestVBBC58')
                })

                cy.request({
                    method :'GET',
                    url : 'https://gorest.co.in/public/v2/users/'+id,
                    headers : {
                        Authorization: 'Bearer c93dbb38aebc2ce7a25849ed206c8fe1d1164eafcaaac0adedbe5cf7be0892f1'
                    }
                }).then((response)=>{
                    expect(response.status).to.be.equal(200)
                    expect(response.body).has.property('name',putpayload.name)
                })
            })
        })

})