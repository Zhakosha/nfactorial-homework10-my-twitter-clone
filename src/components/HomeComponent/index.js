import NewTweet from "./NewTweet";
import TweetsList from "./TweetsList";

export default function Home(){
    return(
        <div className="w-50 mt-3">
            <h3 className="mx-3">Home</h3>
            <NewTweet/>
            <TweetsList/>
        </div>
    )
}