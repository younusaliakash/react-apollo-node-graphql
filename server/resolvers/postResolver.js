const { fakePostData } = require("../FakeData/fakePostData")

const totalPosts = () => fakePostData.length

const posts = () => fakePostData ;

const newPost = (parent, args) => {
    // console.log(args)
    const post = {
        id: fakePostData.length + 1,
        title: args.input.title,
        description: args.input.description
    }

    fakePostData.push(post);
    return post;

}

module.exports = {
    Query : {
        totalPosts,
        posts
    },
    Mutation : {
        newPost
    }
}