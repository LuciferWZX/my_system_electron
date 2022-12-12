import React, {FC} from "react";
import noSelectedId from "@/assets/jsons/no-selected-friend.json";
import Lottie from "react-lottie";
import {LottieBox} from "@/pages/login/style";

const EmptyInfo:FC = () => {
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: noSelectedId,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    return(
        <LottieBox>
            <Lottie
                options={defaultOptions}
                height={400}
                width={300}
                isClickToPauseDisabled={true}
            />
        </LottieBox>
    )
}
export default EmptyInfo