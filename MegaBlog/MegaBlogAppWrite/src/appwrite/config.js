import { data } from 'react-router-dom';
import conf from  '../conf/conf.js';
import { Client, Account, ID, Databases,Storage,Query } from "appwrite";

export class Service{
    client=new Client();
    Databases;
    buckets;

    constructor(){
        this.client
                    .setEndpoint(conf.appwriteUrl)
                    .setProject(conf.appwriteProjectId);

        this.account =new Account(this.client);
        this.Databases =new Databases(this.client);
        this.bucket= new Storage(this.client);
           
    }

    async createPost({title, slug, content, featureImage, status, UserId}){
        
        try{
            return await  this.document.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            );
             
         }
         catch(error){
             console.log("Appwrite service : CreatePost :",error);
         }
    }
    async updatePost(slug, {title,  content, featureImage, status, UserId}){

        try{
            return await  this.Databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featureImage,
                    status
                }
            );
             
         }
         catch(error){
             console.log("Appwrite service :UpdatePOst :",error);
         }
    }
    async deletePost(slug, {title,  content, featureImage, status, UserId}){

        try{
            
              await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            );
             
            return true;
             
         }
         catch(error){
             console.log("Appwrite service :DELETE :",error);
             return false;
         }
             
    }
    async getPost(slug){

        try{
            
            return  await this.databases.getPost(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            );
             
            
             
         }
         catch(error){
             console.log("Appwrite service :getPost :",error);
             return false;
         }
             
    }

    async getPosts(queries= [Query.equal("status","active")]){

        try{
            
            return  await this.Databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            );
                 
         }
         catch(error){
             console.log("Appwrite service :getPost :",error);
             return false;
         }
             
    }

    async uploadFile(file){
        try{
            
             return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
            );
             return true;
            
             
         }
         catch(error){
             console.log("Appwrite service : UploadFile :",error);
             return false;
         }
    }
    async deleteFile(fileID){
        try{
            
              await this.buckets.deleteFile(
                conf.appwriteBucketId,
                fileID,
                
            );
             return true;
            
             
         }
         catch(error){
             console.log("Appwrite service : deleteFile :",error);
             return false;
         }
    }
    async FilePreview(fileID){
        try{
            
            return   this.buckets.getFilePreview(
                conf.appwriteBucketId,
                fileID,
                
            );
                  
         }
         catch(error){
             console.log("Appwrite service : UploadFile :",error);
             return false;
         }
    }
}

const service = new Service();
export default service;