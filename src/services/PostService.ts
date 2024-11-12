import { ref, Ref } from "vue"
import IPost from "@/interfaces/IPost"

class PostService {
    private post: Ref<IPost>
    private posts: Ref<Array<IPost>>

    constructor() {
        this.post = ref<IPost>({})
        this.posts = ref<Array<IPost>>([])
    }

    getPost(): Ref<IPost> {
        return this.post
    }

    getPosts(): Ref<Array<IPost>> {
        return this.posts
    }

    async fetchAll(): Promise<void>{
        try{
            const url = 'https://jsonplaceholder.typicode.com/posts'
            const res = await fetch(url)
            const json = await res.json()
            this.posts.value = json
            console.log("-----------------")
            console.log(json)
        }catch(e){
            console.error(e)
        }   
    }

    async fetchById(id: string | Array<string>): Promise<void>{
        try{
            const url = `https://jsonplaceholder.typicode.com/posts/${id}`
            const res = await fetch(url)
            const json = await res.json()
            this.post.value = json
        }catch(e){
            console.error(e)
        }
    }
}


export default PostService