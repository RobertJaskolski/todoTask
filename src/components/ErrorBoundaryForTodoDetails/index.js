import React from 'react';
import SkeletonTaskDetails from '../SkeletonTaskDetails';

class ErrorBoundaryForTodoDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <SkeletonTaskDetails isError />;
    }
    return this.props.children;
  }
}

export default ErrorBoundaryForTodoDetails;
