import React, {useState} from 'react';
import "./LikeButton.sass"
const LikeButton = () => {
    const [liked, setLiked] = useState(null)
    return (
        <button
            onClick={() => setLiked(!liked)}
            className={`likeButton ${liked ? "likeButton__active" : ""}`}
        >
            <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.99983 1.22833C2.27336 1.22833 0.80249 2.51925 0.80249 4.19584C0.80249 5.35244 1.34408 6.32619 2.06186 7.13282C2.77718 7.93667 3.70006 8.61141 4.53436 9.17614L5.97386 10.1505C6.1315 10.2572 6.33823 10.2572 6.49588 10.1505L7.93537 9.17614C8.76968 8.61141 9.69255 7.93667 10.4079 7.13282C11.1257 6.32619 11.6672 5.35244 11.6672 4.19584C11.6672 2.51925 10.1964 1.22833 8.4699 1.22833C7.57994 1.22833 6.79683 1.64563 6.23487 2.18557C5.67291 1.64563 4.88979 1.22833 3.99983 1.22833Z" stroke="#FF0000" strokeWidth="0.620843" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
    );
};

export default LikeButton;