const rating = document.querySelector('#rating');
const btns = document.querySelectorAll('.btn-rating');

// Add a query selector to each button that will toggle selected state
Array.from(btns).forEach(btn => btn.addEventListener('click', () => {
    // if the clicked button is selected, deselect it
    if (btn.classList.contains('btn--selected')) {
        btn.classList.remove('btn--selected')
    }
    // else deselect any selected buttons and select only this button
    else {
        Array.from(btns).forEach(btn => btn.classList.remove('btn--selected'));
        btn.classList.add('btn--selected');
    }
    
}))

// When the submit button is clicked if there is a rating selected change to the submitted form version
document.querySelector('#submit').addEventListener('click', (event) => {
    event.preventDefault(); // prevent automatic form submission in case a rating has not been selected
    const ratingSelected = Array.from(btns)
        .find(btn => btn.classList.contains('btn--selected'));
    if (!!ratingSelected) {
        // In a real project this would submit the form and only continue when response is received this is successful
        event.target.parentElement.parentElement.classList.add('submitted');
        rating.textContent = `You selected ${ratingSelected.textContent} out of 5`
    }
    // In a real project there would propbably be some error message displayed.
    else {
        throw Error('No rating selected')
    }
})