import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom'
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { ArticleReadDelete } from '../../components/Articles/ArticleItem';

const middlewares = [thunk, promiseMiddleware];
const mockStore = configureMockStore(middlewares);
describe('Renders CreateArticleComponent', () => {

  const props = {
      article: {
        fetched: true,
        owner: true,
        article: {
          time: { readTime: '2minutes' },
          title: 'title',
          body: 'body',
          slug: 'slug',
          image: 'image',
          tagList: 'sjdas',
          description: 'dskfdbsf',
          likes: [],
        },
      },
      getArticle: jest.fn(() => Promise.resolve({})),
      deleteArticle: jest.fn(),
      getRating: jest.fn(),
      loading: false,
      getCurrentProfile: jest.fn(),
      deleteArticle: jest.fn(),
      profile: { profile: {}},
      match: {
        params: {
          articleSlug: 'jest',
        },
      },
      articleRating: jest.fn(),
      dislikeRef: { current: { src: 'https://image.flaticon.com/icons/svg/2107/2107623.svg' }},
      likeRef: { current: { src: 'https://image.flaticon.com/icons/svg/2107/2107623.svg' }},
  }

  const props2 = {
    article: {
      fetched: true,
      owner: true,
      article: {
        time: { readTime: '2minutes' },
        title: 'title',
        body: 'body',
        slug: 'slug',
        image: 'image',
        tagList: 'sjdas',
        description: 'dskfdbsf',
        likes: [],
      },
    },
    getArticle: jest.fn(() => Promise.resolve({})),
    deleteArticle: jest.fn(),
    getRating: jest.fn(),
    loading: true,
    getCurrentProfile: jest.fn(),
    profile: { profile: {}},
    match: {
      params: {
        articleSlug: 'jest',
      },
    },
    articleRating: jest.fn(),
    dislikeRef: { current: { src: 'https://image.flaticon.com/icons/svg/2107/2107623.svg' }},
    likeRef: { current: { src: 'https://image.flaticon.com/icons/svg/2107/2107623.svg' }},
}


  const wrapper = shallow(
    <MemoryRouter>
      <Provider store={mockStore({props})}><ArticleReadDelete {...props} /></Provider>
    </MemoryRouter>
  );

  const wrapper2 = shallow(
    <ArticleReadDelete {...props} />,
  );

  const wrapper3 = shallow(
    <ArticleReadDelete {...props2} />
  )

  it('should render create component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('test update state onchange', () => {
    wrapper2.instance().componentDidMount()
    expect(wrapper2.instance().props.getArticle).toBeCalled();
  });

  it('should test componentDidUpdate', () => {
    wrapper2.instance().componentDidUpdate()
    wrapper2.setState({ disliked: false });
 })

  it('shoudl handle on comment', () => {
    const wrapper2 = shallow(
      <ArticleReadDelete {...props} />,
    );  
    const component = wrapper2.instance();
    component.handleOnDelete();
    expect(component).toBeDefined();
  });

  it('shoudl handle on comment', () => {
    const wrapper2 = shallow(
      <ArticleReadDelete {...props} />,
    );
    const component = wrapper2.instance();
    component.toggle();
    component.toggle1();
    component.onStarClick();
    component.handleRatingsSubmit();
    expect(component).toBeDefined();
  });

  it('should like article', () => {
    const instance = wrapper2.instance();
    instance.likeArticle();
    expect(wrapper2).toBeDefined();
  });
  it('should dislike article', () => {
    const instance = wrapper2.instance();
    instance.dislikeArticle();
    expect(wrapper2).toBeDefined();
  });
  it('test handleOnDelete', () => {
    const component = shallow(<ArticleReadDelete {...props} />);
    component.instance().handleOnDelete()
    expect(component).toHaveLength(1);
  });
});
