import { Grid } from "@material-ui/core"
import React from "react"
import PostCard from "./PostCard"
import img from "./default.png"
import pict from "./download.jpg"
import posts from "./posts"


const Content = () => {

    const getPosts = (postsObj) =>{
        return(
            <Grid item xs={12} sm={4}>
                <PostCard
                 {...postsObj} 
                 imgSrc={pict} 
                 avatarSrc={img}
                 desc= "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita voluptates suscipit id libero quis magni ipsa pariatur exercitationem sint iusto possimus cum perspiciatis iure"
                />
            </Grid>
        )
    }
    return (
        <Grid container spacing={4}>
                {/* <PostCard 
                id="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita voluptates suscipit id libero quis magni ipsa pariatur exercitationem sint iusto possimus cum perspiciatis iure,"
                title="Books people re(read)"
                date={" August 2, 2020"} 
                imgSrc ={pict}
                avatarSrc={img}
                /> */}
                {posts.map(postsObj=> getPosts(postsObj))}
        </Grid>
    )
}
export default Content