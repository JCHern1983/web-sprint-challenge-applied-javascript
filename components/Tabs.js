// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


const topics = document.querySelector('.topics')

axios.get('https://lambda-times-api.herokuapp.com/topics')
    .then( response => {
        response.data.topics.forEach( topic => {
            topics.append(tabCreate(topic))
        })
    })
    .catch( error => {
        console.log('Found an error.', error)
    })

function tabCreate(info) {
    let tab = document.createElement('div')
    tab.classList.add('tab')
    tab.textContent = info

    return tab
} 