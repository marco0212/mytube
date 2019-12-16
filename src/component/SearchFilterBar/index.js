import React from "react";

export default function SearchFilterBar({ orderBy, changeFilterMode }) {
  const filterModes = ["relevance", "date", "viewCount"];
  return (
    <div className="row">
      <div className="col-12">
        <div className="search-filter btn-toolbar justify-content-end mb-4">
          <div className="btn-group" role="group">
            {filterModes.map(item => {
              return (
                <button
                  key={item}
                  type="button"
                  className={
                    orderBy === item ? `btn btn-info` : `btn btn-secondary`
                  }
                  onClick={changeFilterMode.bind(null, item)}
                >
                  {item === "date" ? "Latest" : item}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
