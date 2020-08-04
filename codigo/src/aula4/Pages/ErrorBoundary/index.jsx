import React from 'react';

import ErrorBoundary from "./ErrorBoundary";
import BugSimulator from "./BugSimulator";

const ErrorBoundaryView = () => {
    return (
        <ErrorBoundary>
            <BugSimulator />
        </ErrorBoundary>
    );
};

export default ErrorBoundaryView;
