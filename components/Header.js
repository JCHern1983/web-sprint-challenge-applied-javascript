// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component


const headerContainer = document.querySelector('.header-container')

function header(dates, title, temp) {
    let header = document.createElement('div')
    header.classList.add('header')

    let date = document.createElement('span')
    date.classList.add('date')
    date.textContent = dates
    header.appendChild(date)

    let h1 = document.createElement('h1')
    h1.textContent = title
    header.appendChild(h1)

    let temperature = document.createElement('span')
    temperature.classList.add('temp')
    temperature.textContent = temp
    header.appendChild(temperature)

    return header
}

headerContainer.append(header('October 30, 2020', 'Lambda Times', '68°'))