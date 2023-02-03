import { useEffect } from 'react';
import { useState } from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';

const s = {
  style: {
    fontSize: '16px',
    margin: '20px',
  },
};

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Ai Caramba!!</h1>; //will render this, in case of an error.
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node,
};

const ItWillThrowError = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    if (number > 3) throw new Error("Hi! I'm an Error.");
  }, [number]);

  return (
    <button
      {...s}
      onClick={() => {
        setNumber((n) => n + 1);
      }}
    >
      Click to increase {number}
    </button>
  );
};

export const App = () => {
  return (
    <>
      <div>
        <ErrorBoundary>
          {/* only what is inside of this will be replaced by the error message */}
          <ItWillThrowError />
        </ErrorBoundary>
      </div>
      <div>
        <ErrorBoundary>
          {/* only what is inside of this will be replaced by the error message */}
          <ItWillThrowError />
        </ErrorBoundary>
      </div>
      <div>
        <ErrorBoundary>
          {/* only what is inside of this will be replaced by the error message */}
          <ItWillThrowError />
        </ErrorBoundary>
      </div>
      <div>
        <ErrorBoundary>
          {/* only what is inside of this will be replaced by the error message */}
          <ItWillThrowError />
        </ErrorBoundary>
      </div>
    </>
  );
};
