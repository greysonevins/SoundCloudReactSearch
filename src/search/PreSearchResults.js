import React from 'react';

const PreSearchResults = ({ preResultsList, search, chooseSearch, seeMore }) => (
      <ul className="list-group">
            <li className="list-group-item active">
              <span className="glyphicon glyphicon-search" aria-hidden="true" />
              Search For {search}
            </li>
        { preResultsList.map((content, index) => (
            <li className="list-group-item" key={index} id={content.id} onClick={chooseSearch}>
                { content.username && content.username }
                { content.title && content.title }
            </li>
          ))
        }
      </ul>
)

export default PreSearchResults;
