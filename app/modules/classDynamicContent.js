import * as domElements from './domElements.js';

export default class DynamicContentClass {
    // Method to show content dynamically
  static changeContent = (index) => {
        for (let i = 0; i < domElements.arrSections.length; i += 1) {
            if (index === i) {
                domElements.sections[i].classList.remove('hide');
                domElements.links[i].style.color = '#8ecae6';
            } else if (index !== i) {
                domElements.sections[i].classList.add('hide');
                domElements.links[i].style.color = '#fff';
            }
        }
    }
}