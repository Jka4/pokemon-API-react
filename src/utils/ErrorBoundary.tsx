import React from "react";

export default class ErrorBoundary extends React.PureComponent {
  state = { error: null };

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({ error });
    errorInfo.ErrorType = "ReactError";
  }

  render() {
    if (this.state.error) {
      return (
        <div className="errorBoundary">
          <div className="textErrorBoundary">Ooops...</div>
        </div>
      );
    }

    return this.props.children;
  }
}
