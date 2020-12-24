import React from "react";
import { VISIBILITYFILTER } from "../constant";
import { connect } from "react-redux";
import { filterVisibility } from "../actions/visibilityAction";
import PropTypes from "prop-types";

function VisibilityFilter({ filterVisibility, activeFilter }) {
  return (
    <div className="btn-container">
      {Object.keys(VISIBILITYFILTER).map((filter) => {
        const currentKey = VISIBILITYFILTER[filter];
        return (
          <span
            onClick={() => filterVisibility(currentKey)}
            key={currentKey}
            className={`link ${activeFilter === currentKey && "active"}`}
          >
            {currentKey}
          </span>
        );
      })}
    </div>
  );
}

VisibilityFilter.propTypes = {
  filterVisibility: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeFilter: state.filter.filter,
});

const mapDispatchToProps = { filterVisibility };

export default connect(mapStateToProps, mapDispatchToProps)(VisibilityFilter);
