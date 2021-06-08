const posts = [
    {title: 'Post Başlık 1', detail: 'Post Detay 1'},
    {title: 'Post Başlık 2', detail: 'Post Detay 2'},
    {title: 'Post Başlık 3', detail: 'Post Detay 3'},
    {title: 'Post Başlık 4', detail: 'Post Detay 4'},
];


const listPosts = () => {
    posts.map((post) => {
        console.log(post.title);
    });
    console.log(`--------------------------------\n`);
};

const addPost = (newPost) => {
    const promise = new Promise((resolve, reject) => {
        posts.push(newPost);
        resolve(posts);
        reject('Hata oluştu, tekrar deneyiniz');
    });
    return promise;
};

async function showPosts() {
    try {
        console.log('Post Listesi');
        listPosts();
        const newBook = {title: 'Post Başlık 5', detail: 'Post Detay 5'};
        await addPost(newBook);
        console.log('Listenin güncel hali');
        listPosts();
    } catch (error) {
        console.log(error);
    }
}

showPosts();