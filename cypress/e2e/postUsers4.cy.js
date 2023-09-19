import payload from "../config/payload"

describe("Post request",()=>{


function generateRandomEmail(){
    const randomString = Math.random().toString(36).substring(2,10)
    const email = randomString+"@dispostable.com"
    return email
}


    it("Post create record using package > json",()=>{

        payload.email = generateRandomEmail()
     

        // cy.log("***"+emailAdd+"***")

        cy.request({
            method : 'POST',
            url : "https://gorest.co.in/public/v2/users",
            headers:{
                Authorization:"Bearer c93dbb38aebc2ce7a25849ed206c8fe1d1164eafcaaac0adedbe5cf7be0892f1"
            },
            body: payload
        }).then((response)=>{
            expect(response.status).to.equal(201)
            expect(response.body).has.property('name','TestUser4590')
            expect(response.body).has.property('gender','male')
            expect(response.body).has.property('status','active')
            expect(response.body.id).to.not.be.null

            cy.request({
                method:'GET',
                url:'https://gorest.co.in/public/v2/users/'+response.body.id,
                headers:{
                    Authorization:'Bearer c93dbb38aebc2ce7a25849ed206c8fe1d1164eafcaaac0adedbe5cf7be0892f1'
                }
            }).then((response)=>{
                expect(response.status).to.equal(200)
                expect(response.body).has.property('name','TestUser4590')
                expect(response.body).has.property('gender','male')
                expect(response.body).has.property('status','active')
                expect(response.body.id).to.not.be.null
            })
        })


})

it("Incorrect Header",()=>{

    payload.email = generateRandomEmail()
     cy.request({
        method : 'POST',
        url : "https://gorest.co.in/public/v2/users",
        headers:{
            Authorization:"Bearer c93dbb38aebc2ce7a25849ed206c8fe1d1164eafcaaac0adedbe5"
        },
        body: payload,
        failOnStatusCode:false
    }).then((response)=>{
        expect(response.status).to.equal(401)
    })
})

it("No sending Mandatory data",()=>{

    payload.email = null 
     cy.request({
        method : 'POST',
        url : "https://gorest.co.in/public/v2/users",
        headers:{
            Authorization:'Bearer c93dbb38aebc2ce7a25849ed206c8fe1d1164eafcaaac0adedbe5cf7be0892f1'
        },
        body: payload,
        failOnStatusCode:false
    }).then((response)=>{
        expect(response.status).to.equal(422)
    })
})

it("Unique attribute value as DUPLICATE",()=>{

    payload.email = "v6p4ed5z@dispostable.com"
     cy.request({
        method : 'POST',
        url : "https://gorest.co.in/public/v2/users",
        headers:{
            Authorization:'Bearer c93dbb38aebc2ce7a25849ed206c8fe1d1164eafcaaac0adedbe5cf7be0892f1'
        },
        body: payload,
        failOnStatusCode:false
    }).then((response)=>{
        expect(response.status).to.equal(422)
    })
})

})