import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "./sass/style.css";
import AppRouter from './routers/AppRouter';
import reportWebVitals from './reportWebVitals';
import configureStore from './store/configureStore';
import { addBlog,removeBlog,editBlog } from './actions/blogs'

const store = configureStore();








store.subscribe(()=>{
    console.log(store.getState());
})

const blog1 =  store.dispatch(addBlog({title:'blog title 1', description: 'blog description 1'}))
const blog2 =  store.dispatch(addBlog({title:'blog title 2', description: 'blog description 2', dateAdded: Date.now()}))

store.dispatch(removeBlog({id: blog1.blog.id}))
store.dispatch(editBlog(blog2.blog.id, { title: 'updated blog title', description: 'updated blog' }))
// console.log(blog2);

ReactDOM.render(<AppRouter />,document.getElementById('root'));


reportWebVitals();
