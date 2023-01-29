import { PostService } from './05-dependency-b';
import { LocalDataBaseService, JsonDatabaseService, WebDatabaseService } from './05-dependency-c';

// Main
(async () => {
    //const provider = new LocalDataBaseService();
    //const provider = new JsonDatabaseService();
    const provider = new WebDatabaseService();

    const postService = new PostService(provider);

    const posts = await postService.getPosts();

    console.log({ posts })
})();