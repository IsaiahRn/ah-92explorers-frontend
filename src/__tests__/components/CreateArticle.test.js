import React from 'react';
import { shallow } from 'enzyme';
import { CreateArticle } from '../../components/Articles/CreateArticle.jsx';

// mock for mutations observer window object
global.MutationObserver = class {
  constructor(_callback) {}

  disconnect = () => {}

  observe(_element, _initObject) {}
};

describe('Renders CreateArticleComponent', () => {
  const props = {
    article: {
      message: 'test',
    },
    title: '<h1>Write my name</h1>',
    body: '<p>What did we have for lunch</p>',
    error: '',
    publishArticle: jest.fn(),
  };

  const wrapper = shallow(
    <CreateArticle {...props} />,
  );
  it('should render create component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a mainDiv class', () => {
    expect(wrapper.find('.mainDiv').length).toBe(1);
  });
  it('should render a publishBtn class', () => {
    expect(wrapper.find('.publishBtnArticle').length).toBe(1);
  });
  it('should render a titleContent class', () => {
    expect(wrapper.find('.titleContent').length).toBe(1);
  });
  it('should publish article on click', () => {
    const btn = wrapper.find('.publishBtnArticle');
    const component = wrapper.instance();
    btn.simulate('click')
    component.onClickPublish();
    expect(component).toBeDefined();
  });
});