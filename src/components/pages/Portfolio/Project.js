import React from 'react';

const Project = ( {name, link, repo, img} ) => {
    return (
        <div className="tile mt-2 p-0" key={name}>
            <a className="proj" href={link} target="_blank" rel="noreferrer">
                <img src={img} alt={name} />
                <div className="proj-title px-2">
                    <h3>{name}</h3>
                </div>
            </a>
            <a className="proj" href={repo} target="_blank" rel="noreferrer">
                <h3 className="proj-title px-2">
                   Repo
                </h3>
            </a>
        </div>
    );
}

export default Project;