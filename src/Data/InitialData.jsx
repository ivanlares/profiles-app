import obamaImageURL from "../Assets/UserImages/obama.png";
import tomImageURL from "../Assets/UserImages/tom.jpg";

export const initialUserCredentials = {
    "ivan": {
        "username": "ivan",
        "password": "123"
    },
    "john_doe": {
        "username": "ivan",
        "password": "123"
    },
    "obama": {
        "username": "obama",
        "password": "123"
    },
    "tom": {
        "username": "tom",
        "password": "123"
    }
}

export const initialUserProfiles = {
    "ivan": {
        "photoURL": "https://avatars.githubusercontent.com/u/11603927?v=4",
        "aboutMe": "CSUF computer science student.",
        "linkedInURL": "https://www.linkedin.com/in/ivanlares",
        "instagramURL": null,
        "spotifyEmbed": null
    },
    "john_doe": {
        "aboutMe": "Generic user profile description."
    },
    "obama": {
        "photoURL": obamaImageURL,
        "aboutMe": "Former President of the United States of America",
        "linkedInURL": "https://www.linkedin.com/in/barackobama",
        "instagramURL": "https://www.instagram.com/barackobama/?hl=en",
        "spotifyEmbed": `<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/3xN6J0LCyVj8k1gVCguWRH?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
    },
    "tom": {
        "photoURL": tomImageURL,
        "aboutMe": "Thomas Anderson is an American technology entrepreneur and co-founder of the social networking website Myspace, which he founded in 2003 with Chris DeWolfe. He was later president of Myspace and a strategic adviser for the company"
    }
}

export const initialFollowingData = {
    "ivan": {
        "john_doe": true,
        "obama": true,
        "tom": true
    }
}