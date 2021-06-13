import React, { useState } from 'react'
import Unsplash, { toJson } from "unsplash-js";
const unsplash = new Unsplash({
    accessKey: "cte-Q37eck_tFQVx4nlsOxGYBiAicoeXSEMtLWafAO0",
    secret: "r7L6C0zzAa3kW6dko9L5x5cbQnHv9J5YEqsox4wvfCM"
});

export default function Imagesearch() {
    const [query, setQuery] = useState("");
    const [pics, setPics] = useState([]);
    console.log(query);
    const searchPhotos = async (e) => {
        e.preventDefault();
        unsplash.search
            .photos(query, 1, 20)
            .then(toJson)
            .then((json) => {
                // console.log(json);
                setPics(json.results)
            });
        // console.log("Submitting the Form")
    };
    return (
        <>
            <form className="search-container" onSubmit={searchPhotos}>
                <div className="search" >
                    <input type="text" className="search-box" placeholder="What category of image you are looking for?" value={query} onChange={(e) => setQuery(e.target.value)} />
                    <button type="submit" className="search-button" >
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </form>
            <div className="card-list">
                {pics.map((pic) =>
                    <div className="card" key={pic.id}>
                        <img
                            className="card--image"
                            alt={pic.alt_description}
                            src={pic.urls.full}
                            width="50%"
                            height="50%"
                        ></img>
                    </div>)};
      </div>
        </>
    )
}
