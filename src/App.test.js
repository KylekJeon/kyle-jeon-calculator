import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';

const findByKeyAttr = (wrapper, val) => {
  return wrapper.find(`[data-key="${val}"]`);
}

describe('App', () => {
  let wrapper, clearButton, equalButton, eightButton, fourButton, textContainer

  beforeEach(() => {
    wrapper = mount(<Provider store={store}><App /></Provider>);
    clearButton = findByKeyAttr(wrapper, "C");
    equalButton = findByKeyAttr(wrapper, "=");
    eightButton = findByKeyAttr(wrapper, "8");
    fourButton = findByKeyAttr(wrapper, "4");
    textContainer = wrapper.find('.text-container');

    clearButton.simulate('click');
    wrapper.update();
  })

  test('renders without crashing', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  test('adds numbers properly', () => {
    const plusButton = findByKeyAttr(wrapper, "+");

    eightButton.simulate('click');
    plusButton.simulate('click');
    fourButton.simulate('click');
    equalButton.simulate('click');
    wrapper.update();

    expect(textContainer.text()).toEqual("12");
  })

  test('subtracts numbers properly', () => {
    const minusButton = findByKeyAttr(wrapper, "-");

    eightButton.simulate('click');
    minusButton.simulate('click');
    fourButton.simulate('click');
    equalButton.simulate('click');
    wrapper.update();

    expect(textContainer.text()).toEqual("4");
  })

  test('multiplies numbers properly', () => {
    const multiplyButton = findByKeyAttr(wrapper, "*");
    
    eightButton.simulate('click');
    multiplyButton.simulate('click');
    fourButton.simulate('click');
    equalButton.simulate('click');
    wrapper.update();

    expect(textContainer.text()).toEqual("32");
  })

  test('divides numbers properly', () => {
    const divideButton = findByKeyAttr(wrapper, "/");
    
    eightButton.simulate('click');
    divideButton.simulate('click');
    fourButton.simulate('click');
    equalButton.simulate('click');
    wrapper.update();

    expect(textContainer.text()).toEqual("2");
  })

  test('stores & fetches numbers properly', () => {
    const storeButton = findByKeyAttr(wrapper, "MS");
    const fetchButton = findByKeyAttr(wrapper, "MR");
    
    eightButton.simulate('click');
    storeButton.simulate('click');
    clearButton.simulate('click');
    wrapper.update();
    expect(textContainer.text()).toEqual("0");
    fetchButton.simulate('click');
    wrapper.update();
    expect(textContainer.text()).toEqual("8");
  })


})

