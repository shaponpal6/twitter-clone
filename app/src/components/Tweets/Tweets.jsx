import { useState , useEffect } from 'react'
import { Reply, Retweet, Like, Share, VerifiedBadge } from '../Sidebar/İcons';

export default function Tweets(){
    const [data, setData] = useState([]);

    useEffect(() =>{
        (async () => {
            const rawResponse = await fetch('http://localhost:3000/api/tweets');
            const response = await rawResponse.json();
            if(response && response.length > 0){
                setData(response.reverse())
            }
            console.log("response>>",response);
          })();
    }, [])
    return(
        <>
        {data.length ? (
            data.map((item, i) => (
                <div key={i} className="flex space-x-3 px-4 py-3 border-b border-primary-container_border_color">
            <img src="https://i2.milimaj.com/i/milliyet/75/0x410/5d6576d6554281214c076887.jpg" className="w-11 h-11 rounded-full" />
            <div className="flex-1">
                <div className="flex items-center text-sm space-x-2">
                <span className="ml-1 font-bold text-white">Shapon Pal <VerifiedBadge/></span>
                <span className="ml-2 text-primary-gray_colors">@shaponpal</span>
                <div className="mx-2 text-primary-gray_colors">·</div>
                <span className="text-primary-gray_colors">49m</span>
                </div>
                <div className="ml-1">
                    <p className="items-center text-white overflow-hidden">
                        {item.description || ""}
                        {/* <img className="mt-3 rounded-xl" src="https://i2.milimaj.com/i/milliyet/75/0x410/5d6576d6554281214c076887.jpg"/> */}
                    </p>
                    <ul className="flex justify-between mt-2">
                        <li className="flex items-center space-x-3 text-primary-gray_colors text-sm group">
                            <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 group-hover:bg-primary-tweets_hover_colors1 cursor-pointer">
                                <Reply/>
                            </div>
                            <span>20</span>
                        </li>

                        <li className="flex items-center space-x-3 text-primary-gray_colors text-sm group">
                            <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 group-hover:bg-primary-tweets_hover_colors2 cursor-pointer">
                                <Retweet/>
                            </div>
                            <span>5</span>
                        </li>

                        <li className="flex items-center space-x-3 text-primary-gray_colors text-sm group">
                            <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 group-hover:bg-primary-tweets_hover_colors3 cursor-pointer">
                                <Like/>
                            </div>
                            <span>9,9K</span>
                        </li>

                        <li className="flex items-center space-x-3 text-primary-gray_colors text-sm group">
                            <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 group-hover:bg-primary-tweets_hover_colors1 cursor-pointer">
                                <Share/>
                            </div>
                            <span>2</span>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
            ))
        ) : (<h4>No Tweets</h4>)}
        </>
    )
}