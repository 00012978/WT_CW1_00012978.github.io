const questionAnswerPair = document.querySelectorAll('ul.faq-accordion>li');

for(let pair of questionAnswerPair) {
    // going through each of the pairs of questions and answers obtained previously
    function toggleActive(){
        if (pair.classList.contains('answer-active')) {
            // if the current li element already has the 'answer-active' class, it will be removed from its classes attribute in html
            pair.classList.remove('answer-active');
        } else {
            // if the current element doesn't have 'answer-active' class, it adds 'answer-active' to the element's classes list and removes 'answer-active' from each other element
            for (let element of questionAnswerPair){
                element.classList.remove('answer-active');
            }
            pair.classList.add('answer-active');
        }
    }
    pair.addEventListener('click', toggleActive); // calling the toggleActive function whenever a question-answer pair, which corresponds to an li inside of ul.faq-accordion, is clicked.
}