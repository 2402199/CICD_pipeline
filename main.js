import './style.css'
// import javascriptLogo from './javascript.svg'


document.querySelector('#app').innerHTML = `
  <div>
    
      <img src="https://cdn.analyticsvidhya.com/wp-content/uploads/2023/01/AWS-Logo.png" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="https://www.cisco.com/c/dam/assets/swa/img/anchor-info/what-is-cicd-628x353.jpg" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello your application is deployed !</h1>
    <div class="card">
      <a href='https://jerrycloud.co.in'>
    </div>
    <p class="read-the-docs">
      Click here to see my Blog and learn a lot in AWS & DEVOPS
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
