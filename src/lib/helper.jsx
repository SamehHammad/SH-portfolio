export const getSanityImageUrl = ( ref ) => {
    if (!ref) return "";
    const parts = ref.split("-");
    if (parts.length < 4) return "";
    const [, assetId, dimensions, format] = parts;
    return `https://cdn.sanity.io/images/bcak0jmm/production/${assetId}-${dimensions}.${format}?q=90&fit=max&auto=format`;
  };
