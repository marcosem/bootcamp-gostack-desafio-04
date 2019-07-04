import React, { Component } from 'react';
import PostItem from './PostItem';

import Avatar1 from '../../assets/User01.jpg';
import Avatar2 from '../../assets/User02.jpg';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Marcos Mathias',
          avatar: Avatar1
        },
        date: '03 Jul 2019',
        content: 'Tem alguém em casa dando comida pros cachorros?',
        comments: [
          {
            id: 2,
            author: {
              name: 'Anezka Mathias',
              avatar: Avatar2
            },
            date: '03 Jul 2019',
            content: 'Cachorro? Que Cachorro?'
          }
        ]
      },
      {
        id: 2,
        author: {
          name: 'Anezka Mathias',
          avatar: Avatar2
        },
        date: '04 Jul 2019',
        content: 'Achei os cachorros!',
        comments: [
          {
            id: 1,
            author: {
              name: 'Marcos Mathias',
              avatar: Avatar1
            },
            date: '04 Jul 2019',
            content: 'Que bom! E eles têm comida?'
          }
        ]
      }
    ]

    /*
    posts: [
      {
        id: 1,
        author: {
          name: 'Marcos Mathias',
          avatar: Avatar1
        },
        date: '03 Jul 2019',
        content: 'Tem alguém em casa dando comida pros cachorros?',
        comments: [
          {
            id: 2,
            author: {
              name: 'Anezka Mathias',
              avatar: Avatar2
            },
            date: '03 Jul 2019',
            content: 'Cachorro? Que Cachorro?'
          }
        ]
      },
      {
        id: 2,
        author: {
          name: 'Anezka Mathias',
          avatar: Avatar2
        },
        date: '04 Jul 2019',
        content: 'Achei os cachorros!',
        comments: [
          {
            id: 1,
            author: {
              name: 'Marcos Mathias',
              avatar: Avatar1
            },
            date: '04 Jul 2019',
            content: 'Que bom! E eles têm comida?'
          }
        ]
      }
    ]
    */
  };

  render() {
    const { posts } = this.state;

    //console.log(posts);
    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;
