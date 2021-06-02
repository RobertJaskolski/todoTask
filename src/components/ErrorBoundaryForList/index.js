import React from 'react';
import SkeletonTodosListPanel from '../SkeletonTodosListPanel';

class ErrorBoundaryForList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <SkeletonTodosListPanel isError />;
    }
    return this.props.children;
  }
}

export default ErrorBoundaryForList;
