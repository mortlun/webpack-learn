import _ from 'lodash';
import printMe from './print.js';
import './styles.css';
function component() {
  let element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');


  btn.onclick = printMe;
  btn.innerHTML = 'Click me and checsk the console!';
  element.appendChild(btn)



  return element;
}

document.body.appendChild(component());


if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}