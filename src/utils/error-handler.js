export let handleSetError = (errorState, errorName, errorMsg, setError) => {
  setError({
    errorState,
    errorName,
    errorMsg,
  });
};
