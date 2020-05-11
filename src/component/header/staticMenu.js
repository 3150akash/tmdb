const staticMenu = [
    {
        menuTitle: "Movie",
        menuKey: "movie",
        menuOptions: [
            {
                title: "Popular",
                titleKey: "popular",
                href: "/categories/movie/popular",
                data: {
                    genres: [],
                    certifiactes: [],
                    searchAll: true,
                    primary_release_date_lt: new Date().toISOString().slice(0, 10),
                    primary_release_date_gt: new Date().toISOString().slice(0, 10),
                    language: "",
                    userScore: [0, 10],
                    minUserVotes: [0],
                    runTime: [0, 360]
                }
            },
            { title: "Now Playing", titleKey: "popular", href: "/categories/movie/now playing", data: {} },
            { title: "Up Coming", titleKey: "popular", href: "/categories/movie/up coming", data: {} },
            { title: "Top Ratedd", titleKey: "popular", href: "/categories/movie/top rated", data: {} }
        ]
    },
    {
        menuTitle: "TV Show",
        menuKey: "tv",
        menuOptions: [
            {
                title: "Popular", titleKey: "popular", href: "/categories/tv/popular", data: {
                    genres: [],
                    certifiactes: [],
                    searchAll: true,
                    primary_release_date_lt: new Date().toISOString().slice(0, 10),
                    primary_release_date_gt: new Date().toISOString().slice(0, 10),
                    language: "",
                    userScore: [0, 10],
                    minUserVotes: [0],
                    runTime: [0, 360]
                }
            },
            { title: "Airing Today", titleKey: "Airing Today", href: "/categories/tv/Airing Today", data: {} },
            { title: "On TV", titleKey: "on TV", href: "/categories/tv/on TV", data: {} },
            { title: "Top Ratedd", titleKey: "Top Rated", href: "/categories/tv/Top Rated", data: {} }
        ]
    },
    {
        menuTitle: "People",
        menuKey: "people",
        menuOptions: [{ title: "Popular People", titleKey: "popular", data: {} }]
    }
]
export default staticMenu