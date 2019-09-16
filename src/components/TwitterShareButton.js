import React from "react";

class TwitterButton extends React.Component {
  render() {
    const { url } = this.props;
    return (
      <button type="submit" className="completed_content_button">
        <a
          className="completed_content_button_twitter"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="completed_content_button_icon fab fa-twitter" />
          Compartir en Twitter
        </a>
      </button>
    );
  }
}

export default TwitterButton;
