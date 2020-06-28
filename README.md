### The Project

In this project, I have created a simple live currency converter by using React as a main tool. Simply, project consists of two pages. On initial page, user has a form to fill which has two select field for the currencies from and to, along with one input field for the amount and button to submit the form. Before submitting, simple validation will take place. There are some edge cases that I have created to check and if user succeed to pass through the validation, the result of the currency conversion will be displayed in the same page.

While I display the result on the initial page, I store the information about the calculation so that I could show the conversion history on the second page which can be reached if user clicks on `View conversion history >` text. In that page, user has a chance to see all the calculations that has been done along with amount and the from-to currencies.

For the styles, I've used Form components from `react-semantic-ui` library, which I honestly love to play with. Thanks to their pre-defined styles I can create better UI experience for the users.

## Challenges

At the beginning it took me a while to discover my way with the currency API's. Because I wanted to create a live currency calculations which has to rely on an API where I could get live rates about specific currencies. After a while I've found a free API with unlimited calls which is relatively easy to use.

Styles were the most time consuming part. Because of the design structure, it took me quite a time to implement them on mobile and tablet devices. Still, I had quite fun playing with the styles and on the way I have learned quite a lot as well.

All in all, this project helped me to improve myself even further in React, tackling me with new problems and finding new solutions for them was the most entertaining part for me. If you ever need a currency converter, please click here: https://currency-converter-react.netlify.app/
