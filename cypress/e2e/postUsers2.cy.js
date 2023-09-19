describe("Post request",()=>{


function generateRandomEmail(){
    const randomString = Math.random().toString(36).substring(2,10)
    const email = randomString+"@dispostable.com"
    return email
}


    it("Post create record",()=>{

        let emailAdd = generateRandomEmail()
        let payload = {
            "name" : "TestUser4590",
            "email" : emailAdd, //email id must be unique every time
            "gender" : "male",
            "status" : "active"
        }

        cy.log("***"+emailAdd+"***")

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
        })
    })

})