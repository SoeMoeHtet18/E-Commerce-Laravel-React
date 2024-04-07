import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import Spinner from "../Component/Spinner";
import ViewAndLike from "../Component/ViewAndLike";
import "swiper/css";
import "swiper/css/navigation";
import Banner from "./Swiper";
import "../../css/home.css";

export default function Home() {
    const styles = {
        lineTrough: {
            display: "inline",
            textDecoration: "line-through black 2px",
        },
    };
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [newArrivalProducts, setNewArrivalProducts] = useState([]);
    const [productByCategory, setProductByCategory] = useState([]);
    const [loader, setLoader] = useState(true);
    const [checkProduct, setCheckProduct] = useState(false);
    const [likeCss, setLikeCss] = useState("");

    useEffect(() => {
        axios
            .get("/api/home")
            .then((d) => {
                const { featuredProducts, newArrivalProducts } = d.data.data;
                setFeaturedProducts(featuredProducts);
                setNewArrivalProducts(newArrivalProducts);
                setProductByCategory(productByCategory);
                setLikeCss(d.data.css);
                setLoader(false);
            })
            .catch((err) => {
                setFeaturedProducts([]);
                setProductByCategory([]);
                setLoader(false);
            });
    }, []);

    const data = [
        {
            title: {
                mm_name: "အထင်ကရပစ္စည်းများ",
                en_name: "Recommended For You",
            },
            products: featuredProducts,
        },
        {
            title: {
                mm_name: "အသစ်ရောက်သည့် ပစ္စည်းများ",
                en_name: "New Arrivals",
            },
            products: newArrivalProducts,
        },
    ];

    return (
        <>
            {loader && <Spinner />}
            {!loader && (
                <>
                    {checkProduct && <></>}
                    {!checkProduct && (
                        <div className="px-5">
                            <Banner />
                            {data.map(({ title, products }) => (
                                <ProductShowcase
                                    title={title}
                                    products={products}
                                />
                            ))}
                        </div>
                    )}
                </>
            )}
        </>
    );
}

const ProductShowcase = ({ title, products }) => (
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-12">
                <div className="section-heading">
                    {/* <div className="line-dec" /> */}
                    <h1 className="text-center text-white font-bree">
                        {window.locale === "mm" ? title.mm_name : title.en_name}
                    </h1>
                </div>
            </div>
            <div className="col-md-12">
                <div className="row">
                    {products.map((product) => (
                        <div key={product.slug} className="col-md-3">
                            <div className="card p-3 m-2 w-100">
                                <div className="product-img-container">
                                    <img
                                        src={product.image_url}
                                        alt={product.slug}
                                        className="product-img"
                                    />
                                </div>
                                <div className="card-body">
                                    <div className="w-100">
                                        <h3 className="card-text">
                                            {product.name}
                                        </h3>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                        <div>
                                            {product.discount_price ? (
                                                <h6>
                                                    <span className="text-black">
                                                        Price:
                                                    </span>
                                                    <span
                                                        className="text-black"
                                                        style={
                                                            styles.lineTrough
                                                        }
                                                    >
                                                        ${product.sale_price}
                                                    </span>
                                                    <span className="mx-2">
                                                        $
                                                        {product.sale_price -
                                                            product.discount_price}
                                                        <b className="text-danger ms-2">
                                                            {(
                                                                (product.discount_price /
                                                                    product.sale_price) *
                                                                100
                                                            ).toPrecision(2)}
                                                            % off
                                                        </b>
                                                    </span>
                                                </h6>
                                            ) : (
                                                <>
                                                    <h6>
                                                        <span className="text-black">
                                                            Price:
                                                        </span>
                                                        ${product.sale_price}
                                                    </h6>
                                                </>
                                            )}
                                            <ViewAndLike
                                                view={product.view_count}
                                                like={product.like_count}
                                                product={product.slug}
                                            />
                                        </div>
                                        <button
                                            className="btn btn-outline-dark py-2"
                                            style={{ height: "fit-content" }}
                                            onClick={() => {
                                                window.location.href = `/products/detail/${product.slug}`;
                                            }}
                                        >
                                            View More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);
