import React from "react";
import PropTypes from "prop-types";
import YouTube from "react-youtube";
import Spacing from "../Spacing";
import { ExternalLink } from "../Link";

import "./style.scss";

const renderVariation = variation => {
  if (variation === null) return null;

  return (
    <span className="Talk-variation">
      This talk was also presented at{" "}
      <ExternalLink to={variation.url}>{variation.title}</ExternalLink>.
    </span>
  );
};

const Talk = ({ videoId, title, event, description, variation, slidesUrl }) => {
  const opts = {
    playerVars: {
      modestbranding: 1,
      iv_load_policy: 3,
    },
  };

  return (
    <div className="Talk">
      <div className="Talk-header">
        <h2 className="Talk-title">{title}</h2>
        <h3 className="Talk-event">{event}</h3>
      </div>

      <Spacing size="16" />

      <div className="Talk-content">
        <YouTube
          containerClassName="Talk-video"
          videoId={videoId}
          opts={opts}
        />

        <div className="Talk-info">
          <p className="Talk-description">{description}</p>

          <Spacing size="16" />

          {renderVariation(variation)}

          <Spacing size="36" />

          <span className="Talk-slides">
            <ExternalLink to={slidesUrl}>Slides</ExternalLink>
          </span>
        </div>
      </div>
    </div>
  );
};

Talk.propTypes = {
  videoId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  event: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  slidesUrl: PropTypes.string,
  variation: PropTypes.object,
};

Talk.defaultProps = {
  slidesUrl: null,
  variation: null,
};

export default Talk;
