import React from 'react';

function Footer() {
    const links = [
        {
            name: "GitHub",
            link: "https://github.com/jsp220"
        },
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/joon-park-155a7424/"
        },
        {
            name: "Stack Overflow",
            link: "https://stackoverflow.com/users/19662710/joon-park"
        },
    ]

    return (
        <footer>
            <div className="container-fluid footer d-flex flex-wrap justify-content-between align-items-center py-2 my-2 border-top">
                <p className="col-3 mb-0 text-muted">©2023 Joon Park</p>
                <ul className="col-9 nav justify-content-end">
                    {links.map((item) => {
                        return <a className="nav-link black" href={item.link} key={item.name} target="_blank" rel="noreferrer">{item.name}</a>
                    })}
                </ul>
            </div>
        </footer>
    )
}

export default Footer;