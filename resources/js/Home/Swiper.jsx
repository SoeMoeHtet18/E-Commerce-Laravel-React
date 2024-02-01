import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { useRef } from "react";

const FireWorks = ({ top, left }) => {
    return (
        <svg
            style={{ position: "absolute", top: top, left: left }}
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#clip0_10_592)">
                <path
                    d="M30.3559 29.207C30.3559 29.207 32.5087 21.8825 32.7344 21.4082C32.9601 20.9339 33.6311 20.7806 34.2305 21.0658C34.8298 21.3511 35.1343 21.9679 34.9083 22.4428C34.6823 22.9177 30.3559 29.207 30.3559 29.207ZM29.5996 30.7962C29.5996 30.7962 27.4472 38.1201 27.2212 38.595C26.9951 39.0699 26.3244 39.2226 25.7251 38.9374C25.1258 38.6522 24.821 38.036 25.0473 37.5605C25.2736 37.0849 29.5996 30.7962 29.5996 30.7962ZM29.1831 29.623C29.1831 29.623 21.8591 27.4705 21.3848 27.2448C20.9099 27.0188 20.7569 26.3487 21.0425 25.7488C21.3277 25.1494 21.9442 24.8456 22.4191 25.0716C22.8934 25.2973 29.1831 29.623 29.1831 29.623ZM30.7728 30.3796C30.7728 30.3796 38.0965 32.5327 38.5714 32.7587C39.0456 32.9844 39.1993 33.6548 38.914 34.2541C38.6285 34.8541 38.012 35.158 37.5371 34.9319C37.0622 34.7059 30.7728 30.3796 30.7728 30.3796ZM29.6825 29.1723C29.6825 29.1723 26.0259 22.4718 25.8512 21.9767C25.6749 21.4817 26.04 20.8993 26.6666 20.6774C27.2925 20.4551 27.9425 20.6765 28.1188 21.1715C28.2939 21.666 29.6825 29.1723 29.6825 29.1723ZM30.2727 30.8315C30.2727 30.8315 33.9293 37.532 34.1041 38.0271C34.2801 38.5228 33.9153 39.1045 33.2884 39.3271C32.6624 39.5494 32.0125 39.328 31.8364 38.8323C31.6617 38.3372 30.2727 30.8315 30.2727 30.8315ZM29.1477 30.2961C29.1477 30.2961 22.4469 33.9518 21.9525 34.1284C21.4568 34.3044 20.8751 33.9396 20.6528 33.3136C20.4302 32.6867 20.6515 32.0367 21.1472 31.8607C21.6417 31.6841 29.1477 30.2961 29.1477 30.2961ZM30.8076 29.7078C30.8076 29.7078 37.5087 26.0515 38.0028 25.8755C38.4982 25.7001 39.0799 26.0649 39.3022 26.6909C39.5251 27.3171 39.3034 27.9677 38.808 28.1431C38.3136 28.3198 30.8076 29.7078 30.8076 29.7078ZM30.0727 28.4213C30.0727 28.4213 29.6889 14.8046 29.746 13.86C29.8031 12.9154 30.3864 12.1822 31.0495 12.2221C31.7133 12.2624 32.2041 13.0605 32.147 14.0051C32.0905 14.9485 30.0727 28.4213 30.0727 28.4213ZM29.8823 31.5832C29.8823 31.5832 30.2664 45.1992 30.209 46.1445C30.1522 47.0885 29.5689 47.8216 28.906 47.7811C28.242 47.7415 27.7509 46.944 27.808 45.9994C27.8651 45.0547 29.8823 31.5832 29.8823 31.5832ZM28.3963 29.9066C28.3963 29.9066 14.7797 30.2904 13.8351 30.2333C12.8901 30.1768 12.1573 29.5928 12.1975 28.9291C12.2372 28.2666 13.0359 27.7746 13.9805 27.8317C14.9245 27.8885 28.3963 29.9066 28.3963 29.9066ZM31.5589 30.0973C31.5589 30.0973 45.1756 29.7135 46.1202 29.7706C47.0652 29.8271 47.7977 30.4116 47.7578 31.0748C47.7178 31.7379 46.9194 32.2293 45.9748 32.1722C45.0311 32.1147 31.5589 30.0973 31.5589 30.0973ZM28.9268 28.8166C28.9268 28.8166 19.0262 19.4598 18.3991 18.7518C17.7718 18.0444 17.6659 17.1133 18.1633 16.6718C18.6602 16.2316 19.573 16.4488 20.2001 17.1568C20.8278 17.8635 28.9268 28.8166 28.9268 28.8166ZM31.0285 31.1873C31.0285 31.1873 40.9291 40.5441 41.5565 41.2514C42.1835 41.9595 42.2891 42.8912 41.7922 43.3314C41.2948 43.7729 40.382 43.5557 39.7552 42.8471C39.1278 42.1397 31.0285 31.1873 31.0285 31.1873ZM28.7923 31.0528C28.7923 31.0528 19.4355 40.9534 18.7272 41.5811C18.0192 42.2081 17.0881 42.314 16.6472 41.8169C16.2067 41.3191 16.4242 40.4072 17.1309 39.7795C17.8399 39.1521 28.7923 31.0528 28.7923 31.0528ZM31.163 28.9511C31.163 28.9511 40.5198 19.0505 41.2278 18.4234C41.9361 17.7957 42.8669 17.6905 43.3078 18.1876C43.7486 18.6848 43.532 19.5963 42.8244 20.2243C42.1154 20.8517 31.163 28.9511 31.163 28.9511ZM25.4364 39.5538C25.4364 39.5538 22.7525 47.9977 22.4897 48.55C22.2268 49.1024 21.5265 49.3204 20.9265 49.0349C20.3266 48.7493 20.0533 48.0703 20.3164 47.5173C20.5796 46.9643 25.4364 39.5538 25.4364 39.5538ZM34.8304 19.7971C34.8304 19.7971 37.2671 11.871 37.5128 11.3548C37.7584 10.8386 38.4445 10.6504 39.0444 10.936C39.6444 11.2215 39.9316 11.8713 39.6857 12.3881C39.4397 12.9049 34.8304 19.7971 34.8304 19.7971ZM33.5348 39.9677C33.5348 39.9677 37.6079 47.8367 37.8119 48.4126C38.0175 48.9902 37.676 49.6375 37.0497 49.8604C36.4238 50.0826 35.7499 49.7954 35.5453 49.2191C35.3397 48.6431 33.5348 39.9677 33.5348 39.9677ZM26.2072 19.3553C26.2072 19.3553 22.3258 12.0277 22.1338 11.4886C21.9428 10.9491 22.295 10.3318 22.9209 10.1095C23.5472 9.88664 24.2104 10.1439 24.4014 10.6833C24.5937 11.2218 26.2072 19.3553 26.2072 19.3553ZM39.9711 26.4439C39.9711 26.4439 47.8414 22.3745 48.4183 22.1702C48.9949 21.9649 49.6428 22.3068 49.8648 22.9334C50.087 23.5593 49.7998 24.2332 49.2222 24.4372C48.6469 24.6415 39.9711 26.4439 39.9711 26.4439ZM19.3534 33.7566C19.3534 33.7566 12.0234 37.6346 11.4843 37.8249C10.9452 38.0169 10.3276 37.6638 10.1053 37.0378C9.88333 36.4112 10.1403 35.7486 10.6791 35.5573C11.2185 35.3663 19.3534 33.7566 19.3534 33.7566ZM39.5539 34.5345C39.5539 34.5345 47.9977 37.2184 48.5507 37.4816C49.104 37.7441 49.3205 38.4444 49.0353 39.0437C48.7504 39.644 48.071 39.9179 47.518 39.6548C46.9647 39.3922 39.5539 34.5345 39.5539 34.5345ZM19.7975 25.1415C19.7975 25.1415 11.8707 22.7029 11.3549 22.4582C10.8374 22.2119 10.6508 21.5258 10.936 20.9265C11.2216 20.3265 11.8717 20.0387 12.3892 20.2849C12.9047 20.5303 19.7975 25.1415 19.7975 25.1415Z"
                    fill="#3BD9CF"
                />
                <path
                    d="M30.402 10.6668C31.0472 10.9738 31.8191 10.6997 32.1261 10.0545C32.4332 9.40937 32.1591 8.63743 31.5139 8.33038C30.8687 8.02333 30.0968 8.29744 29.7897 8.94261C29.4827 9.58779 29.7568 10.3597 30.402 10.6668Z"
                    fill="#3BD9CF"
                />
                <path
                    d="M44.8878 17.5608C45.533 17.8679 46.3049 17.5938 46.612 16.9486C46.919 16.3034 46.6449 15.5315 45.9997 15.2244C45.3546 14.9174 44.5826 15.1915 44.2756 15.8367C43.9685 16.4818 44.2426 17.2538 44.8878 17.5608Z"
                    fill="#3BD9CF"
                />
                <path
                    d="M13.7775 44.7494C14.423 45.0566 15.1954 44.7824 15.5026 44.1368C15.8098 43.4913 15.5356 42.719 14.89 42.4117C14.2445 42.1045 13.4721 42.3788 13.1649 43.0243C12.8577 43.6698 13.132 44.4422 13.7775 44.7494Z"
                    fill="#3BD9CF"
                />
                <path
                    d="M28.2633 51.6435C28.9089 51.9507 29.6812 51.6764 29.9884 51.0309C30.2957 50.3854 30.0214 49.613 29.3759 49.3058C28.7303 48.9986 27.958 49.2728 27.6508 49.9183C27.3435 50.5639 27.6178 51.3362 28.2633 51.6435Z"
                    fill="#3BD9CF"
                />
                <path
                    d="M8.84484 30.0852C9.49002 30.3923 10.262 30.1182 10.569 29.473C10.8761 28.8278 10.602 28.0559 9.95677 27.7488C9.3116 27.4418 8.53966 27.7159 8.23261 28.3611C7.92556 29.0063 8.19966 29.7782 8.84484 30.0852Z"
                    fill="#3BD9CF"
                />
                <path
                    d="M15.7389 15.5999C16.3841 15.9069 17.156 15.6328 17.4631 14.9877C17.7701 14.3425 17.496 13.5705 16.8508 13.2635C16.2056 12.9564 15.4337 13.2305 15.1267 13.8757C14.8196 14.5209 15.0937 15.2928 15.7389 15.5999Z"
                    fill="#3BD9CF"
                />
                <path
                    d="M42.9264 46.7103C43.5719 47.0176 44.3443 46.7433 44.6515 46.0978C44.9587 45.4522 44.6845 44.6799 44.039 44.3727C43.3934 44.0655 42.6211 44.3397 42.3138 44.9852C42.0066 45.6308 42.2809 46.4031 42.9264 46.7103Z"
                    fill="#3BD9CF"
                />
                <path
                    d="M49.8209 32.2244C50.4661 32.5314 51.238 32.2573 51.5451 31.6122C51.8521 30.967 51.578 30.195 50.9328 29.888C50.2877 29.5809 49.5157 29.8551 49.2087 30.5002C48.9016 31.1454 49.1757 31.9173 49.8209 32.2244Z"
                    fill="#3BD9CF"
                />
            </g>
            <defs>
                <clipPath id="clip0_10_592">
                    <rect
                        width="45"
                        height="45"
                        fill="white"
                        transform="translate(19.3379) rotate(25.4506)"
                    />
                </clipPath>
            </defs>
        </svg>
    );
};

const Banner = () => {
    const swiperRef = useRef(null);

    const prevTo = () => {
        swiperRef.current.swiper.slidePrev();
    };

    const nextTo = () => {
        swiperRef.current.swiper.slideNext();
    };

    return (
        <div id="banner-container">
            <Swiper
                ref={swiperRef}
                rewind={true}
                navigation={true}
                pagination={{ clickable: true }}
                modules={[Pagination]}
            >
                <SwiperSlide>
                    <div id="banner">
                        <p id="bannerText">
                            Check Out Our
                            <br /> Brand New Air Jordan1Retro High OG <br />{" "}
                            Prototype
                        </p>
                        <button id="buyNowBtn" className="btn">
                            Buy Now
                        </button>
                        <motion.img
                            animate={{ x: 10, y: -50 }}
                            transition={{
                                ease: "easeInOut",
                                duration: 2.5,
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                            id="banner-box-img"
                            src="/assets/img/banner/box.svg"
                            alt=""
                        />
                        <motion.img
                            animate={{ x: -80, y: -30 }}
                            transition={{
                                ease: "easeInOut",
                                duration: 2.5,
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                            id="shoe-one-img"
                            src="/assets/img/banner/shoe_one.svg"
                            alt=""
                        />
                        <motion.img
                            animate={{ x: -10, y: 80 }}
                            transition={{
                                ease: "easeInOut",
                                duration: 2.5,
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                            id="shoe-two-img"
                            src="/assets/img/banner/shoe_two.svg"
                            alt=""
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div id="banner-one">
                        <div style={{ width: "35%" }}>
                            <img
                                src="/assets/img/banner/banner_one.jpg"
                                alt="Banner One"
                            />
                        </div>
                        <div
                            className="container position-relative"
                            style={{ padding: "8rem 12rem" }}
                        >
                            {[
                                ["19px", "40px"],
                                ["50px", "700px"],
                                ["300px", "420px"],
                            ].map((item) => (
                                <FireWorks top={item[0]} left={item[1]} />
                            ))}
                            {[
                                ["26px", "230px"],
                                ["60px", "400px"],
                                ["43px", "620px"],
                                ["89px", "137px"],
                                ["182px", "101px"],
                                ["265px", "50px"],
                                ["340px", "140px"],
                                ["414px", "40px"],
                                ["360px", "220px"],
                                ["177px", "300px"],
                                ["390px", "350px"],
                                ["410px", "420px"],
                                ["395px", "550px"],
                                ["150px", "640px"],
                                ["280px", "645px"],
                                ["355px", "630px"],
                                ["395px", "700px"],
                            ].map((item) => (
                                <Star top={item[0]} left={item[1]} />
                            ))}
                            <h1 className="text-white">
                                REFRESH YOUR LOOK
                                <br />&<br />
                                AJ1 SNEAKER IS BUILT
                                <br />
                                DIFFERENT
                            </h1>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="d-flex">
                        <div
                            style={{
                                flex: 1,
                                padding: "9rem 0",
                                paddingLeft: "8rem",
                            }}
                        >
                            <h1 className="text-white">
                                Discover Our 2024 Spring Mood Board
                            </h1>
                            <a
                                href="#"
                                className="btn btn-primary text-white py-2 px-4"
                                style={{ backgroundColor: "#3bd9cf" }}
                            >
                                Shop Now
                            </a>
                        </div>
                        <img
                            src="/assets/img/banner/banner_two.png"
                            alt="Banner Two"
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
            <button
                id="swiper-button-prev"
                onClick={prevTo}
                className="border-0"
            >
                <ion-icon class="prev-arrow" name="arrow-back" />
            </button>
            <button
                id="swiper-button-next"
                onClick={nextTo}
                className="border-0"
            >
                <ion-icon class="next-arrow" name="arrow-forward" />
            </button>
        </div>
    );
};

export default Banner;

const Star = ({ top, left }) => {
    return (
        <svg
            style={{ position: "absolute", top: top, left: left }}
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#clip0_10_524)">
                <path
                    d="M24.6881 19.3563L21.1787 15.9968L22.4934 11.3442C22.7359 10.4999 21.8317 9.77317 21.0592 10.1915L16.792 12.4837L12.7705 9.77742C12.0407 9.28067 11.071 9.91252 11.2298 10.7843L12.0982 15.5621L8.28381 18.5519C7.58914 19.097 7.88801 20.2096 8.76857 20.3272L13.5694 20.9785L15.2316 25.5348C15.5358 26.3694 16.6867 26.4221 17.0696 25.6264L19.1755 21.2506L24.0282 21.0711C24.9138 21.0388 25.3301 19.9622 24.6881 19.3563ZM14.741 19.5209L10.3882 18.9347L13.8489 16.2252L13.0655 11.9005L16.7175 14.3483L20.5672 12.2722L19.3691 16.4924L22.5449 19.5326L18.153 19.6974L16.2511 23.6599L14.741 19.5209Z"
                    fill="#3BD9CF"
                />
            </g>
            <defs>
                <clipPath id="clip0_10_524">
                    <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(15.0356) rotate(38.7909)"
                    />
                </clipPath>
            </defs>
        </svg>
    );
};