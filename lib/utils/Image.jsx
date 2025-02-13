import React from "react";

export const Image = ({
  src,
  loading,
  alt,
  fallback,
  ...props
}) => {
  const handleBrokenImage = (event) => (event.target.src = fallback);

  return (
    <img
      src={src}
      loading={loading}
      alt={alt}
      onError={handleBrokenImage}
      {...props}
    />
  );
};
