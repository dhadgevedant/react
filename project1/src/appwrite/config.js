import conf from '../conf/conf.js';
import { Client, ID, Databases, Storage, Query } from "appwrite";



export class Service{

    client = new Client();
    databases;
    bucket;

    constructor() {

        //basic setup
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwirteProjectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
        
        // application specific setup

    }

    //we will take in all the necesary things we need to post a blog
    async createPost({title, slug, content, featuredImage, status, userId}){
        
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabseId,
                conf.appwriteCollectionId,
                slug, //unique id
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        }
        catch(error){
            console.log("Appwrite service :: createPost :: error", error);
        }
    }

    //taking slug as unique id saperatly so its easier to access
    async updatePost(slug, {title, content, featuredImage, status}){
        
        try{
            return await this.databases.updateDocument(
                conf.appwriteDatabseId,
                conf.appwriteCollectionId,
                slug, //unique id
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        }
        catch(error){
            console.log("Appwrite service :: updatePost :: error", error);
        }
    }

    async deletePost(slug){
        
        try{
            await this.databases.deleteDocument(
                conf.appwriteDatabseId,
                conf.appwriteCollectionId,
                slug, //unique id
            )

            return true;
        }
        catch(error){
            console.log("Appwrite service :: deletePost :: error", error);
            return false;
        }
    }

    async getPost(slug){
        
        try{
            return await this.databases.getDocument(
                conf.appwriteDatabseId,
                conf.appwriteCollectionId,
                slug, //unique id
            )
        }
        catch(error){
            console.log("Appwrite service :: getPost :: error", error);
        }
    }

    //to use querry we first needed to set indexes and set status as a key
    //only then we can use querry to filter out the data
    async getPosts( querryToSelectActivePosts = [Query.equal('status', 'active')] ){

        try {
            return await this.databases.listDocuments(

                conf.appwriteDatabseId,
                conf.appwriteCollectionId,
                querryToSelectActivePosts
            )
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error", error);
        
        }
    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error);
        
        }
    }

    async deleteFile(fileId){
       
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error);
            return false;
        }
    }

    async getFilePreview(fileId){
        
        try {
            return this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Appwrite service :: getFilePreview :: error", error);
        
        }
    } 

    async getFileDownload(fileId){
        
        try {
            return this.bucket.getFileDownload(
                conf.appwriteBucketId,
                fileId
            )

        } catch (error) {
            console.log("Appwrite service :: getFileDownload :: error", error);
        
        }
    }
}

const service = new Service();


export default service;