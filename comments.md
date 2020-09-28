
**Space48 ui-exercise Comments
Chris Thompson**

> How you’ve approached implementing the ticket

I approached this ticket by first building the front-end. I chose to use Bootstrap- this saved me the hassle of reinventing generic form elements and the accordion component, as well as handling the valid/invalid styles.

Next, I implemented the JS function to validate the field, only allowing submission when it is valid.

Then, I implented the JS function which POSTs to the data endpoint, and spent the remainder of my time implementing the response handling function which shows the error message above the form.

>Any feedback/questions you had about ticket requirements

I found the ticket and designs to be very clear and easy to get started with.

>What changes you think should be made to improve the UX

If the Email is not associated with any account, then we could provide a direct link to the Register page. 

>What improvements you’d make to the component given more time, and give an estimate for how long those changes would take to implement.

Given more time I would have implemented the 'Success' state. This would have taken another ~15 min