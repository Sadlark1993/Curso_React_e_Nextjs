
import {rest} from 'msw'
import {setupServer} from 'msw/node'

import { render, screen, waitForElementToBeRemoved } from "@testing-library/react"
import { Home } from "."
import userEvent from '@testing-library/user-event';

/* 
  To intercept the requisition (fetch()) and mock a response.
*/
//request, response, context
const handlers = [//the teacher put both responses in one get(). I chose to do this way instead.
  rest.get('https://jsonplaceholder.typicode.com/posts',
  async (req, res, ctx) => {
    return res(ctx.json([
      {
        "userId": 1,
        "id": 1,
        "title": "Title 1",
        "body": "Body number 1. You know."
      },
      {
        "userId": 2,
        "id": 2,
        "title": "Title 2",
        "body": "Body number 2. You know."
      },
      {
        "userId": 3,
        "id": 3,
        "title": "Title 3",
        "body": "Body number 3. You know."
      },
      {
        "userId": 4,
        "id": 4,
        "title": "Title 4",
        "body": "Body number 4. You know."
      },
      {
        "userId": 5,
        "id": 5,
        "title": "Title 5",
        "body": "Body number 5. You know."
      },
      {
        "userId": 6,
        "id": 6,
        "title": "Title 6",
        "body": "Body number 6. You know."
      },
    ]));
  }),

  rest.get('https://jsonplaceholder.typicode.com/photos', 
  async (req, res, ctx) => {
    return res(ctx.json([
      {
        "url": "img/img1.png"
      },
      {
        "url": "img/img2.png"
      },
      {
        "url": "img/img3.png"
      },
      {
        "url": "img/img4.png"
      },
      {
        "url": "img/img5.png"
      },
      {
        "url": "img/img6.png"
      },
    ]))
  })
];

const server = setupServer(...handlers);


describe('<Home />', ()=>{
  beforeAll(()=>{
    server.listen()
  });

  afterEach(()=> server.restoreHandlers());

  afterAll(()=>{
    server.close();
  })

  it('should render searchInput, posts and button', async ()=>{
    render(<Home />);

     
    //Need to do this because the posts are fetching from other website. It's asynchronous.
    const noMorePosts = screen.getByText(/no post matching the search/i);
    await waitForElementToBeRemoved(noMorePosts);

    expect.assertions(23);

    const search = screen.getByPlaceholderText(/search/i);
    expect(search).toBeInTheDocument();

    const image = screen.getAllByRole('img', {name:/title/i});
    expect(image).toHaveLength(3);
    
    const btn = screen.getByRole('button', {name: /load more posts/i});
    expect(btn).toBeInTheDocument();
    //to check if we have 3 images in screen.
    //this print the html of the screen in the terminal.
    

    //only the 3 first post must be on screen.
    expect(screen.getByRole('heading', {name: 'Title 1'})).toBeInTheDocument();
    expect(screen.getByRole('heading', {name: 'Title 2'})).toBeInTheDocument();
    expect(screen.getByRole('heading', {name: 'Title 3'})).toBeInTheDocument();
    expect(screen.queryByRole('heading', {name: 'Title 4'})).not.toBeInTheDocument();

    //the title of the search must be hidden.
    expect(screen.queryByRole('heading', {name: /search results for/i})).not.toBeInTheDocument();

    //the 'no post matching' must be hidden.
    expect(screen.queryByRole('paragraph', {name: /no post matching/i})).not.toBeInTheDocument();

    userEvent.type(search, 'Title 1');

    //only the searched post must be on screen.
    expect(screen.getByRole('heading', {name: 'Title 1'})).toBeInTheDocument();
    expect(screen.queryByRole('heading', {name: 'Title 2'})).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', {name: 'Title 3'})).not.toBeInTheDocument();

    //the title of the search must appear.
    expect(screen.queryByRole('heading', {name: /search results for/i})).toBeInTheDocument();

    //the 'no post matching' must be hidden.
    expect(screen.queryByRole('paragraph', {name: /no post matching/i})).not.toBeInTheDocument();


    userEvent.clear(search); //clears the search

    //all of the 3 posts must be on screen.
    expect(screen.getByRole('heading', {name: 'Title 1'})).toBeInTheDocument();
    expect(screen.getByRole('heading', {name: 'Title 2'})).toBeInTheDocument();
    expect(screen.getByRole('heading', {name: 'Title 3'})).toBeInTheDocument();
    expect(screen.queryByRole('heading', {name: 'Title 4'})).not.toBeInTheDocument();

    //the title of the search must appear.
    expect(screen.queryByRole('heading', {name: /search results for/i})).not.toBeInTheDocument();

    //the 'no post matching' must be hidden.
    expect(screen.queryByRole('paragraph', {name: /no post matching/i})).not.toBeInTheDocument();


    userEvent.type(search, 'AAAAAAAAAAAHHHH que delícia cara!!');
    //screen.debug();

    //no post must appear
    expect(screen.queryAllByRole('img')).toHaveLength(0);
    
    //the title of the search must appear.
    expect(screen.queryByRole('heading', {name: /search results for/i})).toBeInTheDocument();

    //the 'no post matching' must appear.
    expect(screen.queryByText(/no post matching/i)).toBeInTheDocument();

    
  });
})