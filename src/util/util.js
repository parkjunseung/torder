function comma(str) {
  return String(str).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export {comma}

function getProductDescription(str) {
  const text = str.replace(
    /(\r\n|\r|\n)\/\/(\r\n|\r|\n)|\/\/(\r\n|\r|\n)|(\r\n|\r|\n)\/\/|\/\/|(\r\n|\r|\n)/g,
    '<br />'
  );

  return text;
}

export {getProductDescription}