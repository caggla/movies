import React from "react";
import "./Posts.css";
import Post from "../Post/Post";

const Posts = () => {
    const blogPosts = [
        {
            title: "The Lord of the Rings: The Return of the King",
            body: `As King Théoden gathers his army, Elrond tells Aragorn that Arwen is dying, 
            having refused to leave Middle-earth. Elrond gives Aragorn Andúril, reforged from the shards of King Elendil's 
            sword Narsil, and urges him to commit to claiming Gondor's throne, to which he is heir. Joined by Legolas and Gimli,
            Aragorn travels the Paths of the Dead, and pledges to release the ghosts there from their curse should they come to Gondor's aid.`,
            author: "J. R. R. Tolkien. ",
            imgUrl:
                "https://img-s1.onedio.com/id-62dd11983a95fb2558ae306d/rev-0/w-620/f-jpg/s-31d230a9cb683b750f1b7c273dcf5271339105f6.jpg",
        },
        {
            title: "V For Vendetta ",
            body: `The central theme of V for Vendetta is freedom and its relationship with anarchy, or the absence of government.
            V describes himself as an anarchist (as does Alan Moore, the author) — one who believes that all governmental authority is corrupt because it infringes on human freedom.
            V’s actions, and thus, the plot of the graphic novel, reflect his commitment to freedom.It’s clear from the start that the fictional Norsefire government of England in V
            for Vendetta is guilty of restricting human freedom.`,
            author: "James McTeigue",
            imgUrl:
                "https://i0.wp.com/dialmformovie.net/wp-content/uploads/2020/11/V-for-Vendetta-Kapak.jpg?fit=1200%2C715&ssl=1",
        },
        {
            title: "Harry Potter and the Prisoner of Azkaban",
            body: `Harry Potter reluctantly one more summer living with the tedious dursleys, being "good-natured" and staying away from magic, that is, until Aunt Marge arrives with Uncle Vernon's overbearing girl…. Aunt Marge has always been very mean to Harry, especially to Harry, and this time she pushes him so hard that Harry "accidentally"
            causes him to inflate like a giant balloon. After being banned from living in the non-magic world, Harry becomes involved. `,
            author: "J. K. Rowling",
            imgUrl:
                "https://a.ltrbxd.com/resized/sm/upload/fz/2e/tt/dt/harry-potter-and-the-prisoner-of-azkaban-1200-1200-675-675-crop-000000.jpg?v=37f03daa65",
        },
        {
            title: "Iron Man",
            body: `Iron Man - The character of "Iron Man" first met with comic book lovers in 1962. Millionaire industrialist Tony Stark, who was forced to create weapons for the Chinese army in "Iron Man - Iron Man", which soon turned into a comic book loved by the masses, was secretly producing armor for himself during this unintentional work. Thus, he believed that he could stop the Chinese by getting out of their control. 
            When he escaped from China and returned to the United States, he discovered the existence of a dangerous conspiracy and transformed into Iron Man to stop it.`,
            author: "Stan Lee",
            imgUrl:
                "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7F51FA9F6CBD9F0C9B1394B1CC0A6A842D07091318674E234CD33CBF7C28CDC3/scale?width=1200&aspectRatio=1.78&format=jpeg",
        },
    ];

    return (
        <div className="posts-container">
            {blogPosts.map((post, index) => (
                <Post key={index} index={index} post={post} />
            ))}
        </div>
    );
};

export default Posts;
