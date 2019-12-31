import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.js';
import renderer from 'react-test-renderer';

let title = 'Test title';
let content = 'String of content';

it('this card works', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card title={title} content={content} />, div);
    ReactDOM.unmountComponentAtNode(div);
});


it('renders the UI as expected', () => {
    const tree = renderer.create(<Card title={title} content={content} />)
    .toJSON();
    expect(tree).toMatchSnapshot();  
    });


