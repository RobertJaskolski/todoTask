import React from 'react';
import SkeletonTodoDetails from '../SkeletonTodoDetails';

class ErrorBoundaryForTodoDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: '' };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return <SkeletonTodoDetails isError={this.state.error} />;
    }
    return this.props.children;
  }
}

export default ErrorBoundaryForTodoDetails;
