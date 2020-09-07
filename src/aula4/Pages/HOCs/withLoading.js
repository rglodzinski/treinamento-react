import React from 'react';
import { CircularProgress } from "@material-ui/core";

export const withLoading = (WrappedComponent, isLoading, data, ...otherProps) => {
    return () => isLoading ?
        <CircularProgress /> :
        <WrappedComponent isLoading={isLoading} data={data} {...otherProps} />;
};
