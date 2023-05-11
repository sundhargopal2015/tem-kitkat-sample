import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("Error in application: ", error);
    console.log("Error info: ", errorInfo);
  }

  render() {
    return (
      <>
        {this.state.hasError ? (
          <h1>Some technical error happen please contact admin</h1>
        ) : (
          this.props.children
        )}
      </>
    );
  }
}

export default ErrorBoundary;
