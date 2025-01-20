import { countAllPosts, createPost, deletePostById, findAllPosts, findPostById, updatePostById } from "../repositories/postRepository.js";

export const createPostService = async (createPostObject) => {
    //1. Take the image of the post and upload to aws
    //2. Get the image url from aws response
    //3. Create a post object with the caption and the image url in the db using repository
    //4. Return the post object

    const caption = createPostObject.caption?.trim();
    const image = createPostObject.image;

    const post = await createPost(caption, image);

    return post;

};

export const getAllPostsService = async (offset, limit) => {
    const posts = await findAllPosts(offset, limit);

    //calculate total number of posts and the total number of pages

    const totalDocuments = await countAllPosts();
    const totalPages = Math.ceil(totalDocuments / limit);

    return {
        posts, totalDocuments, totalPages
    };
}

export const deletePostService = async (id) => {
    const response = await deletePostById(id);
    return response;
}

export const updatePostService = async (id, updateObject) => {
    const response = await updatePostById(id, updateObject);
    return response;
}

export const getPostByIdService = async (id) => {
    const specificPost = await findPostById(id);

    return specificPost;
};