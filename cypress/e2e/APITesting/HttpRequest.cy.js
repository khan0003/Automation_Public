///<reference types="cypress" /> 

describe("Get Method" , () => {

    it("Get Call" , () => {

        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
        .its('status')
        .should('equal',200);
    })

    it('Post Call' , () => {

        cy.request({
            method : 'POST',
            url : 'https://jsonplaceholder.typicode.com/posts/',
            body : {
                    title : "Test Post for Devsinc",
                    body : "This is the body of POST API Call",
                    userId : 1
                    }            
        })
        .its('status')
        .should('equal',201);
    })

    it("Dynamically generating Json object" , () => {

        const requestBody={

            tourist_name: Math.random().toString(5).substring(2),
            tourist_email: Math.random().toString(5).substring(2)+"@gmail.com",
            tourist_location: "Kashmir"
        }
            cy.request({

            method: 'POST',
            url: "http://restapi.adequateshop.com/api/Tourist" ,
            body: requestBody

                })

            .then( (response) => {

            expect(response.status).to.eq(201)
            expect (response.body.tourist_name).to.eq(requestBody.tourist_name)
            expect (response.body.tourist_email). to.eq(requestBody.tourist_email)
            expect (response.body.tourist_location).to.eq(requestBody.tourist_location)
    })
})

    it('Put Call' , () => {

        cy.request({
            method : 'PUT',
            url : 'https://jsonplaceholder.typicode.com/posts/1',
            body : {
                title : "Test Post for PUT CALL",
                body : "This is the body for the put call",
                userId : 1,
                id : 1
            }
        })
        .its('status')
        .should('equal',200);
    })

    it('Delete Call' , () => {

        cy.request({
            method : 'DELETE',
            url : 'https://jsonplaceholder.typicode.com/posts/1'
        })
        .its('status')
        .should('equal',200);

    })
})