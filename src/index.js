import _ from 'lodash';
import printMe from './print.js'
function component() {
  let element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');


  btn.onclick = printMe;
  btn.innerHTML = 'Click me and check the console!';
  element.appendChild(btn)



  return element;
}

document.body.appendChild(component());
