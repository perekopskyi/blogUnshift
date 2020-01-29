export default class BloggyService {
  constructor() {
    this._apiBase = 'https://bloggy-api.herokuapp.com/';
  }

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }

    return res.json();
  }

  getAllPosts = async () => {
    const res = await this.getResource('posts/');
    return res;
  };

  getAllComments = async (idPost) => {
    const res = await this.getResource(`posts/${idPost}?_embed=comments`);
    console.log(res.map(this._tranformPosts));
    
    return res.map(this._tranformPosts);
  };

  _tranformPosts = (post) => {
    return {
      postId: post.postId,
      body: post.body
    };
  };

  deletePost = async (idPost) => {
    const request = {
      method: 'DEL'
    };

    const res = await fetch(`${this._apiBase}posts/${idPost}`, request);
    return res.json();
  };
}